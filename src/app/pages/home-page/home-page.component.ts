import { Component } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
   user: User = {name: 'John Doe', email: '', phone: '', balance: 10000}
}
