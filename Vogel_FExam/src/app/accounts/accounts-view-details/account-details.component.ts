import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { AccountService } from '../accounts.service';
import { accountParent } from '../account';


@Component({
  selector: 'app-accounts-view-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./accounts-details.component.css']
})
export class AccountsViewDetailsComponent implements OnInit {

  accounts$!: Observable<accountParent>

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.accounts$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>
      this.accountService.getaccountsParent(params.get('id')!))
    );
  }
  gotoAccount(account: accountParent) {
  const accountId = account ? account.id : null;
  this.router.navigate(['/account', {id: accountId, foo: 'foo'}]);
  }
  goBack(): void{
    this.location.back();
  }
}
