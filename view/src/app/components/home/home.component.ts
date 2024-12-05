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
  markers: {id: number, marker: google.maps.Marker}[] = [];

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
      this.addMarker(machine.id, {lat: +machine.latitude, lng: +machine.longitude}, machine.name,
        machine.state === 'on'? 'green':  machine.state === 'off'? 'red': machine.state === 'maintenance'? 'blue': 'purple');
    });


    this.socket.addEventListener('message', (event: any) => {
      const machine = JSON.parse(event.data);
      if(machine.type !== 'insert') {
        this.markers.forEach((marker: any)=>{
          if(marker.id == +machine.id) {
            console.log(marker.id);
            marker.marker.setMap(null);
          }
        })
        this.markers = this.markers.filter(marker => marker.id != +machine.id);
      }
      if(machine.type !== 'delete') {
        this.addMarker(+machine.id, {lat: +machine.latitude, lng: +machine.longitude}, machine.name,
          machine.state === 'on'? 'green':  machine.state === 'off'? 'red': machine.state === 'maintenance'? 'blue': 'purple');
      }
    });
  }

  addMarker(id: number, position: { lat: number; lng: number }, note: string, color: string) {
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
  
    this.markers.push({id, marker});
  }
}
