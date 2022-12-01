import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { OrderService } from '../orders.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders-view-details',
  templateUrl: './orders-view-details.component.html',
  styleUrls: ['./orders-view-details.component.css']
})
export class OrdersViewDetailsComponent implements OnInit {

order$!: Observable<Order>

constructor(
  private route:ActivatedRoute,
  private router: Router,
  private OrderService: OrderService,
  private location: Location
) { }

ngOnInit(): void {
  this.order$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap)=>
    this.OrderService.getorder(params.get('id')!))
  );
}
gotoOrder(order: Order) {
const orderId = order ? order.id : null;
this.router.navigate(['/order', {id: orderId, foo: 'foo'}]);
}
goBack(): void{
  this.location.back();
}
}





