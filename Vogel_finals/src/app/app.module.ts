import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GroceryComponent } from './grocery/grocery/grocery.component';
import { GroceryDetailsComponent } from './grocery/grocery-details/grocery-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    HomepageComponent,
    AccountsComponent,
    LoginComponent,
    RegisterComponent,
    GroceryComponent,
    GroceryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
