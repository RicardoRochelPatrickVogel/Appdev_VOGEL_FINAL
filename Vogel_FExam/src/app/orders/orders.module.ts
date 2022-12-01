import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderListComponent } from './orders-view-list/order-list.component';
import { OrderDetailsComponent } from './orders-view-details/order-details.component';
import { OrderRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ]
})
export class OrderModule {}