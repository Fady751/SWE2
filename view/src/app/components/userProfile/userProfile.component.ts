import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are included
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private route: Router, private userService: UserService) { }

  user: any = null;

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser();
    if(!this.user) {
      alert('please login !');
      this.route.navigate(['/login']);
      return;
    }
  }

  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    this.editMode = false;
    
  }
  viewHistory() {
    
  }
  

  onFileSelected(event: Event) {
    
  }
}
