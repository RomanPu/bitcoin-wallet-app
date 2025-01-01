import { Component,  inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-deteils-page',
  standalone: false,
  
  templateUrl: './contact-deteils-page.component.html',
  styleUrl: './contact-deteils-page.component.scss'
})
export class ContactDeteilsPageComponent  {
  private route = inject(ActivatedRoute)

  contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))

}
