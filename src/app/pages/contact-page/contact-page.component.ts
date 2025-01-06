import { Component, DestroyRef } from '@angular/core';
import { inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'contact-page',
  standalone: false,
  
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  
  private contactService = inject(ContactService)
  private destroyRef = inject(DestroyRef)
  contacts$ = this.contactService.contacts$

  onDelete(contactId: string) {
    console.log('Deleting contact:', contactId)
    this.contactService.deleteContact(contactId)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      error: (err) => {
        console.error('Error deleting contact:', err)
      }
    })
  }
}
