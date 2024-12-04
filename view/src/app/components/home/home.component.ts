import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleMapsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  center: google.maps.LatLngLiteral = { lat: 30.0444, lng: 31.2357 }; // Cairo, Egypt
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    scrollwheel: true,
    disableDefaultUI: false,
  };

  selectedPlace: { lat: number; lng: number } | null = null;

  // Handle map click event
  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.selectedPlace = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      console.log('Selected Coordinates:', this.selectedPlace);
    }
  }
}


