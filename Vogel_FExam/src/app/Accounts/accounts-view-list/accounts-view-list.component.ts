import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { Account } from '../account';

@Component({
  selector: 'app-accounts-view-list',
  templateUrl: './accounts-view-list.component.html',
  styleUrls: ['./accounts-view-list.component.css'],
  providers: [AccountService]
})
export class AccountsViewListComponent implements OnInit{
  
  Title = 'Accounts List';

  account: Account[] = [];

  selectAccount?: Account;

  constructor(
    private service: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  add(firstname: string): void{
    firstname = firstname.trim();
    if(!firstname){ return; }
    this.service.addAccount({ firstname } as Account)
    .subscribe(account =>{
      this.account.push(account);
    });
  }

  delete(account: Account): void{
    this.confirmDelete();
    this.account = this.account.filter(m => m !== account);
    this.service.deleteAccount(account.id)
      .subscribe();
  }

  confirmDelete(){
    alert('Are you sure you want to delete this account to your list?');
  }

  getAccounts(): void{
    this.service.getAccounts().
    subscribe(account => this.account = account);
  }
}
