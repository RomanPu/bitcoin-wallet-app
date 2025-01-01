import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private userService = inject(UserService)
  private contactService = inject(ContactService)
  private USsubscription!: Subscription
  private CSsubscription!: Subscription

ngOnInit(): void {
    this.USsubscription = this.userService.loadUser()
    .subscribe({
        error(err) {
            console.log('err:', err)
        }
    })
    
    this.CSsubscription = this.contactService.loadContacts()
    .subscribe({
        error(err) {
            console.log('err:', err)
        }
    })
}

  ngOnDestroy(): void {
      this.USsubscription?.unsubscribe()
      this.CSsubscription?.unsubscribe()
  }
}
