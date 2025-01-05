import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';
import { delay, map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  return userService.user$.pipe(
      delay(100),
      map(user => {
          return !!user || router.createUrlTree(['/signup'])
      })
  )
};

