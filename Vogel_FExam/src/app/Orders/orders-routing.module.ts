import { NgModule } from '@angular/core';
import {RouterModule, Routes }from '@angular/router';

import { OrdersViewListComponent } from './orders-view-list/orders-view-list.component';
import { OrdersViewDetailsComponent } from './orders-view-details/orders-view-details.component';

const orderRoutes: Routes=[
    {path: 'order', redirectTo: '/order'},
    {path : 'orders/:id', redirectTo: '/orders/:id'},
    {path: 'order', component: OrdersViewListComponent},
    {path: 'orders/:id', component: OrdersViewDetailsComponent}
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
