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
  @Input() contact: Contact | null = null
  @Output() deteiledView = new EventEmitter<string>()

  onDeteiledView() {
    this.deteiledView.emit(this.contact!._id)
  }
}
