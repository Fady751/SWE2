import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  title = 'Waste Sorting Machine Order History';

  expandedOrderId: number | null = null;

  orders = [
    {
      id: 1,
      machineName: 'Smart Recycler 3000',
      status: 'Delivered',
      materials: [
        { name: 'Plastic', quantity: 10 },
        { name: 'Metal', quantity: 5 },
        { name: 'Glass', quantity: 8 }
      ]
    },
    {
      id: 2,
      machineName: 'EcoSort Pro',
      status: 'Pending',
      materials: [
        { name: 'Paper', quantity: 12 },
        { name: 'Organic Waste', quantity: 7 },
        { name: 'Plastic', quantity: 9 }
      ]
    },
    {
      id: 3,
      machineName: 'Waste Wizard X',
      status: 'Shipped',
      materials: [
        { name: 'Metal', quantity: 4 },
        { name: 'Cardboard', quantity: 6 }
      ]
    }
  ];

  toggleDetails(orderId: number) {
    this.expandedOrderId = this.expandedOrderId === orderId ? null : orderId;
  }
}
