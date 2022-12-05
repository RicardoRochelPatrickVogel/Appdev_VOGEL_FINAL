import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Account } from "./account";
import { ACCOUNT } from "./account-list";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service'; 

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient,
        private messageService:MessageService
    ) { }

    private log(message: string): void{
        this.messageService.add(`AccountService: ${message}`);
    }

    private accountUrl = 'api/account';
    httpOptions ={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    private handleError<T>(operation = 'operation', result?: T){
        return(error:any):Observable<T> => {
          console.error(error);
          this.log(`$(operation} failed): ${error.message}`);
        return of(result as T);
        };
    }

    getAccounts(): Observable<Account []> {

        const Account = of(ACCOUNT);

        return  this.http.get<Account[]>(this.accountUrl)
        .pipe(
          tap(_ => this.log('fetch account')),
          catchError(this.handleError<Account[]>('getAccount',[]))
        );
    }

    getaccountsParent(id: number): Observable<Account>{   
        const url=`${this.accountUrl}/${id}`;
    
        return this.http.get<Account>(url).pipe(
          tap(_ => this.log(`fetched account id=${id}`)),
          catchError(this.handleError<Account>(`getAccount id=${id}`))
        )
    }

    addAccount(title: Account): Observable<Account>{
        return this.http.post<Account>(this.accountUrl, title, this.httpOptions).pipe(
          tap((newAccount: Account) => this.log(`added account w/ id=${newAccount.id}`)),
          catchError(this.handleError<Account>('addAccount'))
        );
    }

    updateAccount(account: Account): Observable<any>{
      return this.http.put(this.accountUrl, account, this.httpOptions).pipe(
        tap(_ => this.log(`fetched account id=${account.id}`)),
        catchError(this.handleError<any>('updateAccount'))
      )
    }

    deleteAccount(id: number): Observable<Account>{
        const url= `${this.accountUrl}/${id}`;
    
        return this.http.delete<Account>(url, this.httpOptions).pipe(
          tap(_ => this.log(`deleted account id=${id}`)),
          catchError(this.handleError<Account>('deletedHero'))
        );
    }
}