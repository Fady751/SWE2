import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmachine',
  standalone: true,
  imports: [GoogleMapsModule, NgIf],
  templateUrl: './editmachine.component.html',
  styleUrl: './editmachine.component.scss'
})
export class EditmachineComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  center: google.maps.LatLngLiteral = { lat: 30.0444, lng: 31.2357 };
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    scrollwheel: true,
    disableDefaultUI: false,
  };
  machine: any = {};
  on: string = '';
  off: string = '';
  maintenance: string = '';
  loc: {lat: number, lng: number} | null = null;
  async ngOnInit() {
    this.route.paramMap.subscribe(async(params) => {
      this.machine = {};
      this.machine.id = params.get('id');
      
      const res = await fetch('http://localhost:3000/machine?id=' + this.machine.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('WSToken')}`
        }
      });

      if(!res.ok) {
        return;
      }

      const data = await res.json();

      this.machine = data.machine;

      this.selectedPlace = {lat: this.machine.latitude, lng: this.machine.longitude}; 

      switch(this.machine) {
        case 'on': {
          this.on = 'selected';
          break;
        }
        case 'off': {
          this.off = 'selected';
          break;
        }
        case 'maintenance': {
          this.maintenance = 'selected';
          break;
        }
      }
    });
  }

  selectedPlace: { lat: number; lng: number } | null = null;

  onMapClick(event: google.maps.MapMouseEvent) {
    console.log(this.selectedPlace);
    if (event.latLng) {
      this.selectedPlace = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    }
  }
      

    onSubmit(): void {
      
    }
}



