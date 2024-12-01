import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Machine {
  name: string;
  location: string;
}
@Component({
  selector: 'app-machinelist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './machinelist.component.html',
  styleUrl: './machinelist.component.scss'
})
export class MachinelistComponent {
  machines: Machine[] = [
    { name: 'Machine A', location: 'Location 1' },
    { name: 'Machine B', location: 'Location 2' },
    { name: 'Machine C', location: 'Location 3' },
  ];

  addMachine() {
    this.machines.push({ name: 'New Machine', location: 'New Location' });
  }

  editMachine(index: number) {
    const updatedName = prompt('Enter new name:', this.machines[index].name);
    const updatedLocation = prompt(
      'Enter new location:',
      this.machines[index].location
    );
    if (updatedName !== null) this.machines[index].name = updatedName;
    if (updatedLocation !== null) this.machines[index].location = updatedLocation;
  }
  deleteMachine(index: number) {
    if (confirm('Are you sure you want to delete this machine?')) {
      this.machines.splice(index, 1);
    }
  }
  
}
