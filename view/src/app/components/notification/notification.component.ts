import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf , NgFor ,CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  notifications: any[] = [];
  
  async ngOnInit() {
    this.route.paramMap.subscribe(async(params) => {
      
      const res = await fetch(`http://localhost:3000/notifications`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('WSToken')}`
        }
      });

      if (!res.ok) {
        return;
      }

      const data = await res.json();

      this.notifications = data.result;
    });
  }
  clearNotifications() {
    this.notifications = [];
  }

}

