import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  map!: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  socket: any = new WebSocket('ws://localhost:8080');
  routeCoordinates: any;
  markers: google.maps.Marker[] = [];

  async ngOnInit(): Promise<void> {
    const mapOptions = {
      center: { lat: 30.0444, lng: 31.2357 },
      zoom: 12,
    };

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);

    const res = await fetch('http://localhost:3000/getAllMachines');

    if(!res.ok) {
        return;
    }

    const data = await res.json();

    data.result.forEach((machine: any) => {
      this.addMarker({lat: +machine.latitude, lng: +machine.longitude}, machine.name,
        machine.state === 'on'? 'green':  machine.state === 'off'? 'red': machine.state === 'maintenance'? 'blue': 'purple');
    });


    // this.socket.addEventListener('message', (event: any) => {
    //   console.log('Message from server:', event.data);
    //   const mess = JSON.parse(event.data);

    //   this.addMarker({ lat: mess.latitude, lng: mess.longitude });
    //   this.calculateRoute({ lat: mess.latitude, lng: mess.longitude });
    // });
  }

  addMarker(position: { lat: number; lng: number }, note: string, color: string) {
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
  
    this.markers.push(marker);
  }
}
