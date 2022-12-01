import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../accounts.service';

import { accountParent } from '../account';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-accounts-view-list',
  templateUrl: './accounts-view-list.component.html',
  styleUrls: ['./accounts-view-list.component.css'],
  providers: [AccountService]
})
export class AccountsViewListComponent implements OnInit{
  
  title = 'Accounts List';
  account$!: Observable<accountParent []>;

  account: accountParent[] = [];

  selectAccount?: accountParent;

  SelectedId = 0;

  constructor(
    private service: AccountService,
    private router: Router,
    private route: ActivatedRoute){
    }

  ngOnInit(): void {
      this.account$ = this.route.paramMap.pipe(
          switchMap(params =>{
            this.SelectedId = parseInt(params.get('id')!, 6);
            return this.service.getAccounts();
          })
      );
  }
}
