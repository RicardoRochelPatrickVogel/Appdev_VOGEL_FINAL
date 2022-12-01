import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../orders.service';

import { orderParent } from '../order'; 
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

  olist = 'Orders List';
  slist = 'Shipping List';
  
  order$!: Observable<orderParent []>;

  order: orderParent[] = [];

  selectOrder?: orderParent;

  SelectedId = 0;

  constructor(
    private service: OrderService,
    private router: Router,
    private route: ActivatedRoute){
    }

  ngOnInit(): void {
      this.order$ = this.route.paramMap.pipe(
          switchMap(params =>{
            this.SelectedId = parseInt(params.get('id')!, 6);
            return this.service.getOrders();
          })
      );
  }

}
