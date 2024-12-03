import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  {
  @Input({required: true}) user: any;

  isSlideOut = true;
  notfication = true;
  constructor(private router: Router, private userService: UserService) { }

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onHome(){
    this.router.navigate(['/home']);
  }
  onHistory(){
    this.router.navigate(['/history']);
  }
  onLogout() {
    localStorage.removeItem('WSToken');
    this.userService.updateApp();
    this.router.navigate(['/login']);
  }
  onCallMachine(){
    this.router.navigate(['/callMachine']);
  }
  onMachinesList(){
    this.router.navigate(['/machinelist']);
  }
  onUsersList(){
    this.router.navigate(['/userlist']);
  }
  onSignup(){
    this.router.navigate(['/signup']);
  }
  onLogin(){
    this.router.navigate(['/login']);
  }
  onProfile(){
    this.router.navigate(['/userProfile']);
  }
}
