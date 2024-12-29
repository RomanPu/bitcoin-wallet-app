import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  private userService = inject(UserService)
  private subscriptionUS!: Subscription
  page = 'home';

  ngOnInit(): void {
      this.subscriptionUS = this.userService.loadUser()
        .subscribe({
            error(err) {
                console.log('err:', err)
            }
        }
      )
  }

  ngOnDestroy(): void {
      this.subscriptionUS?.unsubscribe()
  }

  onPageSelect(page: string) {
    this.page = page;
  }
}
