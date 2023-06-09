import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { ProductlistComponent } from './components/products/productlist/productlist.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"customers",component:CustomerlistComponent},
  {path:"products",component:ProductlistComponent},
  {path:"users",component:UsersComponent},
  {path:"user",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
