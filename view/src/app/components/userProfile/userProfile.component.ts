import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are included
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    profilePicture: 'images/defProfile.jpg'
  };

  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveProfile() {
    this.editMode = false;
    alert('Profile updated successfully!');
  }
  viewHistory() {
    // Logic for viewing user history
    console.log("Viewing user history...");
    // Navigate to another page, open a modal, or display history here
  }
  

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput?.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.user.profilePicture = reader.result as string; // Update profile picture
      };
      reader.readAsDataURL(file); // Convert file to Base64 string
    }
  }
}
