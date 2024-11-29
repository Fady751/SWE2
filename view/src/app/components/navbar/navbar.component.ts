import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  {
  isLoggedIn = false; // Change this based on your authentication logic
  user = {
    name: 'Rani Al-Anani', // Replace with dynamic data
    photo: 'assets/profile.jpg', // Replace with the actual user photo URL
  };

  navigateTo(route: string): void {
    // Replace this with your actual routing logic
    console.log(`Navigate to: ${route}`);
  }


}
