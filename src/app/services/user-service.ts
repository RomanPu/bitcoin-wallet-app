import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject, throwError, from } from 'rxjs'
import { tap, retry, catchError, map } from 'rxjs/operators'
import { storageService } from './async-storage.service'
import { User } from '../models/user.model'
import { HttpErrorResponse } from '@angular/common/http'


const ENTITY = 'user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user$ = new BehaviorSubject<User | null>(null)
    public user$ = this._user$.asObservable()

    constructor() {
        const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
        if (!user || user.length === 0) {
            localStorage.setItem(ENTITY, JSON.stringify(initUser))
        }
    }

    public loadUser() {
        const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
        if (!user) {
            return this._handleError(new HttpErrorResponse({ error: 'User not found', status: 404 }))
        }
        this._user$.next(user)
        return this._user$
    }

    private _handleError(err: HttpErrorResponse) {
        console.log('err:', err)
        return throwError(() => err)
    }
}



const initUser: User = { name: 'John Doe', email: '', phone: '', balance: 10000 }