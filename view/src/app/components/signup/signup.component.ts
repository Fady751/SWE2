import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 
  imports: [],
  selector: 'app-signup',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
  
})
export class SignupComponent {
  constructor(private route: Router) { }
  onSubmit(): void {
    console.log('Form Submitted!');}
  toggleForm(): void {
    document.querySelector('.wrapper')?.classList.toggle('active');
  }
  routeLogin(): void {
    this.route.navigate(['/login']);
  }
}
