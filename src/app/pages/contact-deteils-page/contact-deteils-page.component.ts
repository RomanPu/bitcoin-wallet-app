import { Component, ErrorHandler, inject, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'contact-deteils-page',
  standalone: false,
  
  templateUrl: './contact-deteils-page.component.html',
  styleUrl: './contact-deteils-page.component.scss'
})
export class ContactDeteilsPageComponent implements OnInit {
  @Input() contactId!: string;

  private destroyRef = inject(DestroyRef);
  private contactService = inject(ContactService);
  public contact$: Observable<Contact> | null = null;

  ngOnInit() {
  this.contact$ = this.contactService.getContactById(this.contactId)
  .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    // this.contact$.subscribe(contact => {
    //   console.log('contact:', contact);
    // });
  }
}
