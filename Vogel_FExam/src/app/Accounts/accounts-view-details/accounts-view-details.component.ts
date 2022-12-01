import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { AccountService } from '../accounts.service';
import { Account } from '../account';


@Component({
  selector: 'app-accounts-view-details',
  templateUrl: './accounts-view-details.component.html',
  styleUrls: ['./accounts-view-details.component.css']
})
export class AccountsViewDetailsComponent implements OnInit {

  accounts$!: Observable<Account>

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.accounts$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.accountService.getaccount(params.get('id')!))
    );
  }
  gotoAccount(account: Account) {
  const accountId = account ? account.id : null;
  this.router.navigate(['/account', {id: accountId, foo: 'foo'}]);
  }
  goBack(): void{
    this.location.back();
  }
}
