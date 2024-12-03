import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { MachinelistComponent } from './components/machinelist/machinelist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddmachineComponent } from './components/addmachine/addmachine.component';
import { EditmachineComponent } from './components/editmachine/editmachine.component';
import { DetailsmachineComponent } from './components/detailsmachine/detailsmachine.component';
import { UserdetialsComponent } from './components/userdetials/userdetials.component';

export const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'login', component:LoginComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'userProfile', component:UserProfileComponent},
  {path : 'userlist', component:UserlistComponent},
  {path : 'products', component:ProductsComponent},
  {path : 'machinelist',component: MachinelistComponent},
  {path: 'userdetials',component:UserdetialsComponent},
  {path : 'detailsmachine', component:DetailsmachineComponent},
  {path : 'addmachine', component:AddmachineComponent},
  {path : 'editmachine', component:EditmachineComponent},
  {path : '', pathMatch: 'full', redirectTo:'home'},
  {path : '**', component:PageNotFoundComponent},
  {path : 'detailsmachine', component:DetailsmachineComponent},
  {path : 'addmachine', component:AddmachineComponent},
  {path : 'editmachine', component:EditmachineComponent},
  
];
