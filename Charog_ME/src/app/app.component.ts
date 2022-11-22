/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery';
}
*/


import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	page_title = 'Introduction to Web App Development';

	constructor(private contexts: ChildrenOutletContexts) { }
}
