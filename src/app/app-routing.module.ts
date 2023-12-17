import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CitiesComponent } from './cities/cities.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { CityComponent } from './cities/city/city.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  {path :'',component : HomeComponent },
  {path : 'cities',component:CitiesComponent },
  {path : 'products',component:ProductsComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserComponent},
  {path:'cities/:id',component:CityComponent},
  {path:'products/:id',component:ProductComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
