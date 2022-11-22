import { Component, Input, OnInit } from '@angular/core';

import { Grocery } from '../grocery/grocery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() grocery?: Grocery;

  constructor() { }

  ngOnInit(): void {
  }

}
