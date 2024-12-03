import { Component } from '@angular/core';

@Component({
  selector: 'app-detailsmachine',
  standalone: true,
  imports: [],
  templateUrl: './detailsmachine.component.html',
  styleUrl: './detailsmachine.component.scss'
})
export class DetailsmachineComponent {
  machine = {
    name: 'Lathe Machine',
    location: 'Factory Floor - Zone 1'
  };
}
