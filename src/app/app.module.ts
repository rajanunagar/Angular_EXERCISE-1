import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CitiesComponent } from './cities/cities.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { CityComponent } from './cities/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CitiesComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }