import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-addmachine',
  standalone: true,
  imports: [ ReactiveFormsModule, GoogleMapsModule, NgIf],
  templateUrl: './addmachine.component.html',
  styleUrls: ['./addmachine.component.scss', 
    "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class AddmachineComponent {

  center: google.maps.LatLngLiteral = { lat: 30.0444, lng: 31.2357 };
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    scrollwheel: true,
    disableDefaultUI: false,
  };

  selectedPlace: { lat: number; lng: number } | null = null;

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.selectedPlace = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      console.log('Selected Coordinates:', this.selectedPlace);
    }
  }
    constructor(private fb: FormBuilder) {
      
    }

    onSubmit(): void {
      // if (this.addMachineForm.invalid) {
      //   return;
      // }

      // const machineName = this.addMachineForm.value.machineName;
      // const map = this.addMachineForm.value.map;

      // console.log('Machine Name:', machineName);
      // console.log('Map URL or Coordinates:', map);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////
}
