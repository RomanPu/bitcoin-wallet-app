import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private userService = inject(UserService)
  user$ = this.userService.user$

  ngOnInit() {
    this.userService.loadUser().subscribe({
      error: (err) => console.error('Error loading user:', err)
    })
  }
}
