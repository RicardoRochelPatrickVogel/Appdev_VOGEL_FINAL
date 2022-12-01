import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaviComponent } from './navi/navi.component';
import { AccountsViewDetailsComponent } from './accounts/accounts-view-details/account-details.component';
import { AccountsViewListComponent } from './accounts/accounts-view-list/account-list.component';
import { OrderDetailsComponent } from './orders/orders-view-details/order-details.component';
import { OrderListComponent } from './orders/orders-view-list/order-list.component';
import { SelectivePreLoadingStategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/account', pathMatch: 'full'},
  {path: 'navi', component: NaviComponent},
  {path: 'account-list', component: AccountsViewListComponent},
  {path: 'account-details', component: AccountsViewDetailsComponent},
  {path: 'order-list', component: OrderListComponent},
  {path: 'order-details', component: OrderDetailsComponent}

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
 