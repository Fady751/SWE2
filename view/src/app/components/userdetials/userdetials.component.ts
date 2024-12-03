import { Component, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdetials',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userdetials.component.html',
  styleUrl: './userdetials.component.scss'
})
export class UserdetialsComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() gender: string = '';
  @Input() role: string = '';
  @Input() image: string = '';
  @Input() user: any;
   
}
