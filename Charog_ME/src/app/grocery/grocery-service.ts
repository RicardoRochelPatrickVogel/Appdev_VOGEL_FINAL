import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Grocery } from "./grocery";
import { GROCERY } from "./grocery-lists";
import { Router } from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class GroceryService {

	constructor(
		private router: Router,

	) { }
	//retrieves all
	getGroceries(): Observable<Grocery[]> {
		return of(GROCERY);
		//add
	}

	//retrieve one
	getGrocery(id: number | string){
		return this.getGroceries().pipe(
			map((grocery: Grocery[]) =>
			grocery.find(grocery => grocery.id === +id)!)
		);
	}
	addGrocery(grocery: Grocery) { }
	clearGrocery() { }
}