import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  map!: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  socket: any = new WebSocket('ws://localhost:8080');
  routeCoordinates: any;
  markers: { id: number; marker: google.maps.Marker }[] = [];
  selected: { lat: number; lng: number } | null = null; // Stores the selected point

  async ngOnInit(): Promise<void> {
    const mapOptions = {
      center: { lat: 30.0444, lng: 31.2357 },
      zoom: 12,
    };

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    const res = await fetch('http://localhost:3000/getAllMachines');

    if (!res.ok) {
      return;
    }

    const data = await res.json();

    data.result.forEach((machine: any) => {
      this.addMarker(
        machine.id,
        { lat: +machine.latitude, lng: +machine.longitude },
        machine.name,
        machine.state === 'on'
          ? 'green'
          : machine.state === 'off'
          ? 'red'
          : machine.state === 'maintenance'
          ? 'blue'
          : 'purple'
      );
    });

    this.socket.addEventListener('message', (event: any) => {
      const machine = JSON.parse(event.data);
      if (machine.type !== 'insert') {
        this.markers.forEach((marker: any) => {
          if (marker.id == +machine.id) {
            marker.marker.setMap(null);
          }
        });
        this.markers = this.markers.filter(
          (marker) => marker.id != +machine.id
        );
      }
      if (machine.type !== 'delete') {
        this.addMarker(
          +machine.id,
          { lat: +machine.latitude, lng: +machine.longitude },
          machine.name,
          machine.state === 'on'
            ? 'green'
            : machine.state === 'off'
            ? 'red'
            : machine.state === 'maintenance'
            ? 'blue'
            : 'purple'
        );
      }
    });

    // Add a listener for map clicks to select a point
    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      const latLng = event.latLng;

      if (latLng) {
        this.selected = { lat: latLng.lat(), lng: latLng.lng() };
        this.addTemporaryMarker(this.selected); // Add a temporary marker to show the selected point
      }
    });
  }

  addMarker(
    id: number,
    position: { lat: number; lng: number },
    note: string,
    color: string
  ) {
    const customIcon = {
      url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
      scaledSize: new google.maps.Size(40, 40),
    };

    const marker = new google.maps.Marker({
      map: this.map,
      position: position,
      icon: customIcon,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: black; font-size: 14px;">${note}</div>`,
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });

    this.markers.push({ id, marker });
  }

  // Add a temporary marker for the selected point
  addTemporaryMarker(position: { lat: number; lng: number }) {
    // Remove any existing temporary marker
    this.markers.forEach((marker) => {
      if (marker.id === -1) marker.marker.setMap(null);
    });

    const customIcon = {
      url: `http://maps.google.com/mapfiles/ms/icons/yellow-dot.png`,
      scaledSize: new google.maps.Size(40, 40),
    };

    const marker = new google.maps.Marker({
      map: this.map,
      position: position,
      icon: customIcon,
    });

    this.markers.push({ id: -1, marker }); // -1 is the ID for temporary markers
  }

  async call() {
    if (!this.selected) {
      alert('Please select a point on the map.');
      return;
    }

    const res = await fetch(`http://localhost:3000/ordermachine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('WSToken')}`,
      },
      body: JSON.stringify({latitude: this.selected.lat, longitude: this.selected.lng}),
    });

    if (res.ok) {
      alert('Machine is on its way!');
    } else {
      const data = await res.json();
      alert('Failed to call the machine. Please try again' + data.message);
    }
  }
}
