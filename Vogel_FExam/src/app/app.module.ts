import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AccountsComponent,
    OrdersComponent,
    AccountDetailsComponent,
    AccountListComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
