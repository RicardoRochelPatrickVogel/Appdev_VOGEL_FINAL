import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../orders.service'; 

import { Order } from '../order'; 
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-orders-view-list',
  templateUrl: './orders-view-list.component.html',
  styleUrls: ['./orders-view-list.component.css']
})
export class OrdersViewListComponent implements OnInit{
  
  olist = 'Orders List';
  slist = 'Shipping List';
  
  order$!: Observable<Order []>;

  order: Order[] = [];

  selectOrder?: Order;

  SelectedId = 0;

  constructor(
    private Orderservice: OrderService,
    private router: Router,
    private route: ActivatedRoute){
    }

  ngOnInit(): void {
      this.order$ = this.route.paramMap.pipe(
          switchMap(params =>{
            this.SelectedId = parseInt(params.get('id')!, 6);
            return this.Orderservice.getOrders();
          })
      );
  }
}
