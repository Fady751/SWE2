import { NgIf } from '@angular/common';
import { Component, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdetials',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './userdetials.component.html',  
  styleUrls: ['./userdetials.component.scss']
})
export class UserdetialsComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() gender: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
  @Input() user: any;
   
}
