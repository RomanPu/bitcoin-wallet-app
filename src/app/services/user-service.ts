import { inject, Injectable } from '@angular/core'
import { BehaviorSubject, throwError } from 'rxjs'
import { User } from '../models/user.model'
import { HttpErrorResponse } from '@angular/common/http'
import { Contact } from '../models/contact.model'   


const ENTITY = 'user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user$ = new BehaviorSubject<User>(initUser)
    public user$ = this._user$.asObservable()

    // constructor() {
    //     const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    //     if (!user || user.length === 0) {
    //         localStorage.setItem(ENTITY, JSON.stringify(initUser))
    //     }
    // }

    public loadUser() {
        const user = JSON.parse(localStorage.getItem(ENTITY) || 'null')
        // if (!user) {
        //     return this._handleError(new HttpErrorResponse({ error: 'User not found', status: 404 }))
        // }
        this._user$.next(user)
        return this.user$
    }

    public createMove(contact: Contact, move: { toId: string, amount: number }) {
        var user = this._user$.value
        const moveData = {
            toId: move.toId,
            to: contact.name,
            at: Date.now(),
            amount: move.amount
        }
        this._user$.next({ ...user, balance: user.balance - move.amount,
            moves: [...user.moves, moveData] })
        localStorage.setItem(ENTITY, JSON.stringify(this._user$.value))
    }
    public signUp(userCradentials: {name: string, email: string, phone: string}) { 
        const user = { ...initUser, ...userCradentials }     
        localStorage.setItem(ENTITY, JSON.stringify(user))
        this._user$.next(user)
    }

    private _handleError(err: HttpErrorResponse) {
        console.log('err:', err)
        return throwError(() => err)
    }
}



const initUser: User = { name: 'John Doe', email: '', phone: '', balance: 10000, currencyCode: 'USD', moves: [] }