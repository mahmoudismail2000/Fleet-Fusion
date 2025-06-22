import { Component, OnInit } from '@angular/core';

import * as maplibregl from 'maplibre-gl';
@Component({
  selector: 'app-fleet-details',
  templateUrl: './fleet-details.page.html',
  styleUrls: ['./fleet-details.page.scss'],
  standalone:false
})
export class FleetDetailsPage implements OnInit {


// --------------------------------------------- Google Map -----------------------------------------------------------
//   markerOptions = {
//   position: { lat: 24.7136, lng: 46.6753 },
//   icon: {
//     url: './assets/icons/pin.svg', // path to your custom icon image
//     scaledSize: new google.maps.Size(50, 50) // size of the icon
//   }
// };
  
//   options: google.maps.MapOptions = {
//    zoomControl: false,        // disables zoom in/out buttons
//   draggable: false,          // disables dragging the map
//   scrollwheel: false,        // disables scroll wheel zoom
//   disableDoubleClickZoom: true,    
//   fullscreenControl: false,
//   streetViewControl: false,
//   mapTypeControl: false,
//   disableDefaultUI: true, 
  
 
// };



 

  constructor() { }

  ngOnInit() {
    const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=tiivy33xAPdEHKyLy2WY', // Open-source style
    center: [46.6753, 24.7136], 
    zoom: 12,
    interactive: true,           // base interactivity toggle
  dragPan: false,              // disables dragging
  scrollZoom: false,           // disables scroll wheel zoom
  doubleClickZoom: false,      // disables double-click zoom
  keyboard: false,             // disables keyboard navigation
  boxZoom: false,              // disables shift+drag zoom
  dragRotate: false,           // disables map rotation
  touchZoomRotate: false       // disables pinch zoom/rotation
  });

  new maplibregl.Marker({
    element: this.createCustomMarker()
  }).setLngLat([46.6753, 24.7136]).addTo(map);
  
    
  }
  createCustomMarker(): HTMLElement {
  const el = document.createElement('div');
  el.style.backgroundImage = 'url(./assets/icons/pin.svg)';
  el.style.width = '50px';
  el.style.height = '50px';
  el.style.backgroundSize = 'contain';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
  return el;
}

}
