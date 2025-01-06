import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';
import { User } from '../../models/user.model';
import { BitcoinService } from '../../services/bitcoin.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'home-page',
  standalone: false,
  
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)
  private destroyRef = inject(DestroyRef)
  user$ = this.userService.user$
          .pipe(
            takeUntilDestroyed<User>(this.destroyRef),
            tap( user =>this.btcValue$ = this.bitcoinService.convertToBTC(user.balance, user.currencyCode) )
          )
  btcValue$!: Observable<string>;
}
