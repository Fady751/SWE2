import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-editmachine',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './editmachine.component.html',
  styleUrl: './editmachine.component.scss'
})
export class EditmachineComponent {
    addMachineForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.addMachineForm = this.fb.group({
        machineName: ['', [Validators.required]],
        map: ['', [Validators.required]],  // Updated from photoMap to map
      });
    }

    onSubmit(): void {
      if (this.addMachineForm.invalid) {
        return;
      }

      const machineName = this.addMachineForm.value.machineName;
      const map = this.addMachineForm.value.map;

      console.log('Machine Name:', machineName);
      console.log('Map URL or Coordinates:', map);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////
    private map!: L.Map;

    ngOnInit(): void {
      this.initMap();
    }

    private initMap(): void {
      // Initialize the map
      this.map = L.map('map').setView([51.505, -0.09], 13);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Add a marker
      L.marker([51.505, -0.09]).addTo(this.map)
        .bindPopup('A marker on the map.')
        .openPopup();
    }
  }



