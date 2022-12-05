import { switchMap } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() account?: Account;

  Account: Account[]=[];

  constructor(
    private route:ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit(): void {  
    this.getaccountsParent();
  }

  getaccountsParent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accountService.getaccountsParent(id).
    subscribe(account => this.account=account);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    if(this.account){
      this.accountService.updateAccount(this.account)
      .subscribe(() =>this.goBack());
    }
  }
}
