import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf , NgFor ,CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  notifications = [
    { id: 1, title: 'Sorting Complete', description: 'Batch #123 sorted successfully.', timestamp: new Date() },
    { id: 2, title: 'Error Detected', description: 'An error occurred in bin #4.', timestamp: new Date('2024-12-01T10:30:00') },
    { id: 3, title: 'Maintenance Required', description: 'Conveyor belt needs servicing.', timestamp: new Date() },
  ];
  clearNotifications() {
    this.notifications = [];
  }


  formatDate(timestamp: any): string {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(timestamp));
  }
}

