import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';

import { OrderListComponent } from './orders-view-list/order-list.component';
import { OrderDetailsComponent } from './orders-view-details/order-details.component';

const orderRoutes: Routes=[
    {path: 'order', redirectTo: '/order'},
    {path : 'orders/:id', redirectTo: '/orders/:id'},
    {path: 'order', component: OrderListComponent},
    {path: 'orders/:id', component: OrderDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class OrderRoutingModule { }
