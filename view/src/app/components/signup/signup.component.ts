import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
 
  imports: [],
  selector: 'app-signup',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
  
})
export class SignupComponent {
  onSubmit(): void {
    console.log('Form Submitted!');}
  toggleForm(): void {
    document.querySelector('.wrapper')?.classList.toggle('active');
  }
}
