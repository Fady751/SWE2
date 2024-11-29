import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent  implements OnInit {
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
