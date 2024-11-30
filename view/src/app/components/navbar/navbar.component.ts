import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass ,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  {

  isSlideOut = true;
  notfication = true;
  login = true;
  constructor(private router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onHome(){
    this.router.navigate(['/home']);
  }
  onProfile(){
    this.router.navigate(['/profile']);
  }
  onHistory(){
    this.router.navigate(['/history']);
  }
  onLogout(){
    this.router.navigate(['/login']);
  }
  onCallMachine(){
    this.router.navigate(['/callMachine']);
  }
  onMachinesList(){
    this.router.navigate(['/machinesList']);
  }
  onUsersList(){
    this.router.navigate(['/usersList']);
  }
}
