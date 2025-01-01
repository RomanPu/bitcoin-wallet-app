import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';


export const contactResolver: ResolveFn<Contact> = (route, state) => {
  const contactId = route.params['contactId']
  const contactService = inject(ContactService)
  return contactService.getContactById(contactId)
}


