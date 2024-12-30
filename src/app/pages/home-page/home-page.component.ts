import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin.service';


@Component({
  selector: 'home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)
  private destroyRef = inject(DestroyRef)
  user$ = this.userService.user$
  btcValue$!: Promise<String>;

  ngOnInit() {
    this.userService.loadUser()
    .pipe(
      takeUntilDestroyed<User | null>(this.destroyRef)
    )
    .subscribe({
      next: (user) => {
        if (user) {
          console.log('User loaded:', user)
          this.btcValue$ = this.bitcoinService.convertToBTC(user.balance, user.currencyCode);
        }
      },
      error: (err) => console.error('Error loading user:', err)
    })
  }
}
