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
  marker: any;
  flag: any = false;

  ngOnInit(): void {
    const mapOptions = {
      center: { lat: 30.0444, lng: 31.2357 }, // Cairo
      zoom: 12,
    };

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      polylineOptions: {
        strokeColor: '#FF0000',
        strokeWeight: 6,
      },
    });

    this.calculateRoute({ lat: 30.047013909799027, lng: 31.22874736727681 }); // giza

    this.marker = new google.maps.Marker({
      map: this.map,
      position: { lat: 30.047013909799027, lng: 31.22874736727681 },
    });

  
  this.socket.addEventListener('message', (event: any) => {
    console.log('Message from server:', event.data);
    
    const mess = JSON.parse(event.data);
    
    this.calculateRoute({ lat: mess.latitude, lng: mess.longitude });
  });

  }

  calculateRoute(destination: any) {
    const origin = { lat: 30.0444, lng: 31.2357 }; // cairo
    // const  = { lat: 29.9765, lng: 31.1313 };

    this.directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsRenderer.setDirections(response);
          this.routeCoordinates = this.getRouteCoordinates(response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      }
    );
  }
  getRouteCoordinates(response: any) {
    const coordinates: { lat: number; lng: number }[] = [];

    const route = response.routes[0];
    route.legs.forEach((leg: any) => {
      leg.steps.forEach((step: any) => {
        step.lat_lngs.forEach((latLng: any) => {
          coordinates.push({ lat: latLng.lat(), lng: latLng.lng() });
        });
      });
    });

    return coordinates;
  }

  Move() {
    let i = this.routeCoordinates.length - 1;
    const interval = setInterval (()=>{
      if(i == -1) clearInterval(interval);
      console.log(this.routeCoordinates[i]);
      this.marker.setPosition(this.routeCoordinates[i]);
      // this.calculateRoute(this.routeCoordinates[i]);
      i--;
    }, 250);
  }
}


