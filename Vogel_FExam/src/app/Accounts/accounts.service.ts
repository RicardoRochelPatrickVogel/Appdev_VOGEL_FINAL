import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { Account } from "./account";
import { ACCOUNT } from "./account-list";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(
        private router: Router,

    ) { }

    getAccounts(): Observable<Account []> {
        return of (ACCOUNT);
    }

    getaccount(id: number | string){
        return this.getAccounts().pipe(
            map ((accounts: Account[])=>
            accounts.find (account =>account.id === +id)!)
        );
    }
    getAccount() {
        throw new Error("Error");
    }
    addAccount(account : Account){ }
    clearAccount() {}
}