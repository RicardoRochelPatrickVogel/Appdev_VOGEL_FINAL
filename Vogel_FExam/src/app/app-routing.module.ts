import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsViewDetailsComponent } from './Accounts/accounts-view-details/accounts-view-details.component';
import { AccountsViewListComponent } from './Accounts/accounts-view-list/accounts-view-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersViewDetailsComponent } from './Orders/orders-view-details/orders-view-details.component';
import { OrdersViewListComponent } from './Orders/orders-view-list/orders-view-list.component';
import { SelectivePreLoadingStategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  {path: 'navbar', component: NavbarComponent},
  {path: 'accounts-list', component: AccountsViewListComponent},
  {path: 'accounts-details', component: AccountsViewDetailsComponent},
  {path: 'orders-list', component: OrdersViewListComponent},
  {path: 'orders-details', component: OrdersViewDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreLoadingStategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }