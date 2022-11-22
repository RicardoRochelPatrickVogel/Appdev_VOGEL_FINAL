import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	page_title = 'Patrick Vogel';

	constructor(private contexts: ChildrenOutletContexts) { }
}
