import { Component,  inject } from '@angular/core';
import { Move } from '../../models/user.model';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'contact-deteils-page',
  standalone: false,
  
  templateUrl: './contact-deteils-page.component.html',
  styleUrl: './contact-deteils-page.component.scss'
})
export class ContactDeteilsPageComponent  {
  private route = inject(ActivatedRoute)
  private userService = inject(UserService)
  public transfer = 0
  public transactions: Move[] = []

  user$ = this.userService.user$.subscribe(user => this.transactions = user.moves)
  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))

  Transfer() {
    this.contact$.subscribe(contact => {
      this.userService.createMove(contact, { toId: contact._id, amount: this.transfer })
    })
  }
}
