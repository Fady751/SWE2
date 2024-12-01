import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  users = [
    { id: 1, name: 'John Doe', role: 'Admin', photo: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', role: 'User', photo: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Sam Wilson', role: 'User', photo: 'https://via.placeholder.com/50' },
  ];

  editUser(userId: number): void {
    alert(`Edit user with ID: ${userId}`);
  }

  deleteUser(userId: number): void {
    alert(`Delete user with ID: ${userId}`);
  }

  viewDetails(userId: number): void {
    alert(`View details of user with ID: ${userId}`);
  }
}

