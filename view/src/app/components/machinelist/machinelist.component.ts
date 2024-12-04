import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Machine {
  name: string;
  location: string;
}
@Component({
  selector: 'app-machinelist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './machinelist.component.html',
  styleUrls: ['./machinelist.component.scss',
    "../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
  ]
})
export class MachinelistComponent {
  constructor(private router: Router) { }
  machines: Machine[] = [
    { name: 'Machine A', location: 'Location 1' },
    { name: 'Machine B', location: 'Location 2' },
    { name: 'Machine C', location: 'Location 3' },
  ];

  addMachine() {
    this.router.navigate(['addmachine']);
  }

  editMachine(index: number) {
    this.router.navigate(['editmachine']);
    // const updatedName = prompt('Enter new name:', this.machines[index].name);
    // const updatedLocation = prompt(
    //   'Enter new location:',
    //   this.machines[index].location
    // );
    // if (updatedName !== null) this.machines[index].name = updatedName;
    // if (updatedLocation !== null) this.machines[index].location = updatedLocation;
  }
  deleteMachine(index: number) {
    if (confirm('Are you sure you want to delete this machine?')) {
      
    }
  }
  
}
