import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { UserlistComponent } from './components/userlist/userlist.component';

export const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'login', component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'products', component:ProductsComponent},
  {path : 'userlist', component:UserlistComponent}

];
