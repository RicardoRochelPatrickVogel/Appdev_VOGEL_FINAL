import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersViewListComponent } from './orders-view-list/orders-view-list.component';
import { OrdersViewDetailsComponent } from './orders-view-details/orders-view-details.component';
import { OrderRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrdersViewListComponent,
    OrdersViewDetailsComponent
  ]
})
export class OrderModule {}