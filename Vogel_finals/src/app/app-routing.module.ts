import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GroceryComponent } from './grocery/grocery/grocery.component';

import {SelectivePreLoadingStategyService} from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/grocery', pathMatch: 'full' },

  {path: 'home_page', component: HomepageComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'products_lists', component: ProductsListComponent},
  {path: 'product_details', component: ProductDetailsComponent},
  {path: 'accounts', component: AccountsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'grocery', component: GroceryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreLoadingStategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }