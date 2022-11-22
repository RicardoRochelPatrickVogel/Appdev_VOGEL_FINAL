import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GroceryComponent } from "./grocery/grocery.component";
import { GroceryDetailsComponent } from "./grocery-details/grocery-details.component";

const groceryRoutes: Routes = [
	{ path: 'grocery', redirectTo: '/grocery'},
	{ path: 'grocery/:id', redirectTo: '/grocery/:id' },
	{ path: 'grocery', component: GroceryComponent},
	{ path: 'grocery/:id', component: GroceryDetailsComponent}
];

@NgModule({
	imports: [
		RouterModule.forChild(groceryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class GroceryRoutingModule { }