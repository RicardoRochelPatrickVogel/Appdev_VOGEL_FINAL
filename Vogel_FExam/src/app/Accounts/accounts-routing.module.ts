import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';

import { AccountsViewListComponent } from './accounts-view-list/accounts-view-list.component';
import { AccountsViewDetailsComponent } from './accounts-view-details/accounts-view-details.component';

const accountRoutes: Routes=[
    {path: 'account', redirectTo: '/account'},
    {path : 'accounts/:id', redirectTo: '/accounts/:id'},
    {path: 'account', component: AccountsViewListComponent},
    {path: 'accounts/:id', component: AccountsViewDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AccountRoutingModule { }
