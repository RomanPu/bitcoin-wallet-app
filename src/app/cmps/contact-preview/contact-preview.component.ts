import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-preview',
  standalone: false,
  
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  @Input() contact!: Contact 
  @Output() delete = new EventEmitter<string>()
}
