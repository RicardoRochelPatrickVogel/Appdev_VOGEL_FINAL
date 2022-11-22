import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Grocery } from '../grocery';
import { GroceryService } from '../grocery-service';

@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.component.html',
  styleUrls: ['./grocery-details.component.css']
})
export class GroceryDetailsComponent implements OnInit {

  page_title = "Grocery Details"
  grocery$!: Observable<Grocery>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groceryService: GroceryService
  ) { }

  addGrocery(grocery: Grocery) {
    this.groceryService.addGrocery(grocery);
    window.alert('Item added')
  }

  ngOnInit(): void {
    this.grocery$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.groceryService.getGrocery(params.get('id')!))
    );
  }
  gotoGroceries(grocery: Grocery) {
    const groceryId = grocery ? grocery.id : null;
    this.router.navigate(['/grocery', { id: groceryId, foo: 'foo'}]);
  }
}
