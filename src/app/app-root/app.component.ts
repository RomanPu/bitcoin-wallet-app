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
export class AppComponent {
  page = 'home';
  currentContactId: string | null = null;
  
  onPageSelect(page: string) {
    this.page = page;
  }

  onContactSelected(contactId: string) {
    this.currentContactId = contactId;
    this.page = 'deteiled';
  }
}
