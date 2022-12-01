import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { accountParent } from "./account";
import { accountChild } from "./account-list";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(
        private router: Router,

    ) { }

    getAccounts(): Observable<accountParent []> {
        return of (accountChild);
    }

    getaccountsParent(id: number | string){
        return this.getAccounts().pipe(
            map ((accounts: accountParent[])=>
            accounts.find (account =>account.id === +id)!)
        );
    }
    getAccount() {
        throw new Error("Method not implemented.");
    }
    addAccount(account : accountParent){ }
    clearAccount() {}
}