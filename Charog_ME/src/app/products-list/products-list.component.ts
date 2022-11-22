import { Component, Input, OnInit } from '@angular/core';

import { Grocery } from '../grocery/grocery';
import { GROCERY } from '../grocery/grocery-lists';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  groceries = GROCERY;
  @Input() grocery?: Grocery;
  selectedGrocery?: Grocery;
  
  onSelect(grocery: Grocery): void {
    this.selectedGrocery = grocery;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
