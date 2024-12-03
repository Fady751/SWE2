import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  users = [
    { id: 1, name: 'John Doe', role: 'Admin', photo: 'https://via.placeholder.com/50', showEditOptions: false },
    { id: 2, name: 'Jane Smith', role: 'User', photo: 'https://via.placeholder.com/50' , showEditOptions: false},
    { id: 3, name: 'Sam Wilson', role: 'User', photo: 'https://via.placeholder.com/50', showEditOptions: false },
  ];


    toggleEdit(userId: number) {
      this.users = this.users.map(user =>
        user.id === userId
          ? { ...user, showEditOptions: !user.showEditOptions }
          : user
      );
    }

    assignRole(userId: number, role: string) {
      this.users = this.users.map(user =>
        user.id === userId
          ? { ...user, role, showEditOptions: false }
          : user
      );
      console.log(`Assigned ${role} role to user with ID: ${userId}`);
    }

    deleteUser(userId: number) {
      this.users = this.users.filter(user => user.id !== userId);
      console.log(`Deleted user with ID: ${userId}`);
    }

    viewDetails(userId: number) {
      console.log(`Viewing details for user with ID: ${userId}`);
    }
  }
