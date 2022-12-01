import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { Order } from "./order";
import { ORDER } from "./order-list";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private router: Router,

    ) { }

    getOrders(): Observable<Order []> {
        return of (ORDER);
    }

    getordersParent(id: number | string){
        return this.getOrders().pipe(
            map ((orders: Order[])=>
            orders.find (order =>order.id === +id)!)
        );
    }
    getOrder() {
        throw new Error("Error");
    }
    addOrder(order : Order){ }
    clearOrder() {}
}