import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { orderParent } from "./order";
import { orderChild } from "./order-list";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(
        private router: Router,

    ) { }

    getOrders(): Observable<orderParent []> {
        return of (orderChild);
    }

    getordersParent(id: number | string){
        return this.getOrders().pipe(
            map ((orders: orderParent[])=>
            orders.find (order =>order.id === +id)!)
        );
    }
    getOrder() {
        throw new Error("Method not implemented.");
    }
    addOrder(order : orderParent){ }
    clearOrder() {}
}