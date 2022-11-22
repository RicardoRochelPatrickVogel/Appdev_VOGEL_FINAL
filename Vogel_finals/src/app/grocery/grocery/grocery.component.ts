import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryService } from '../grocery-service';

import { Grocery } from 'src/app/grocery/grocery';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css'],
  providers: [ GroceryService]
})
export class GroceryComponent implements OnInit {

  page_title = "Grocery list"
  groceries$!: Observable<Grocery[]>;

  selectedId = 0;
  constructor(
    private service: GroceryService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.groceries$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 6);
        return this.service.getGroceries();
      })
    );
  }

}
