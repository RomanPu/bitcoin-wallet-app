import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { of } from 'rxjs';


export const contactResolver: ResolveFn<Contact> = (route) => {
  const contactId = route.params['contactId']
  const contactService = inject(ContactService)
  console.log('contactId:', contactId)  
  if (!contactId) return of(contactService.getEmptyContact())
  return contactService.getContactById(contactId)
}


