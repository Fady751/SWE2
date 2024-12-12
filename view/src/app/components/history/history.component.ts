import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  title = 'Waste Sorting Machine Order History';

  orders = [
    {
      id: 1,
      machineName: 'Smart Recycler 3000',
      orderDate: new Date('2023-11-15'),
      status: 'Delivered',
    },
    {
      id: 2,
      machineName: 'EcoSort Pro',
      orderDate: new Date('2024-01-10'),
      status: 'Pending',
    },
    {
      id: 3,
      machineName: 'Waste Wizard X',
      orderDate: new Date('2024-02-05'),
      status: 'Shipped',
    },
  ];
}

