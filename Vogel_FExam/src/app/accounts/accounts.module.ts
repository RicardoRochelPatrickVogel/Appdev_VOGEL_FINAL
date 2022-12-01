import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountsViewDetailsComponent } from './accounts-view-details/account-details.component';
import { AccountsViewListComponent } from './accounts-view-list/account-list.component'; 
import { AccountRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountsViewListComponent,
    AccountsViewDetailsComponent
  ]
})
export class AccountModule {}