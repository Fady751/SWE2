import { Component } from '@angular/core';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { UserService } from '../services/user.service';

let routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, SignupComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: Router, private userService: UserService) { }

  user: any = null;

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser();
    // console.log(this.user);
  }

  isSignin: boolean = true;
  toggleForm() {
    this.isSignin = !this.isSignin;
  }
}
