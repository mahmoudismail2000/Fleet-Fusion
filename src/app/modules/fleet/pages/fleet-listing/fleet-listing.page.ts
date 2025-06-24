import { Component, OnInit } from '@angular/core';
import { FleetOption } from 'src/app/core/models/fleet-option';

@Component({
  selector: 'app-fleet-listing',
  templateUrl: './fleet-listing.page.html',
  styleUrls: ['./fleet-listing.page.scss'],
  standalone:false
})
export class FleetListingPage implements OnInit {


  fleetDataList:FleetOption[]=[{img:"./assets/icons/Delivery.svg",name:"Delivery"},
        {img:"./assets/icons/Pickup.svg",name:"Pickup"},
        {img:"./assets/icons/PickupAirport.svg",name:"Pickup From airport"},
        {img:"./assets/icons/Delivery.svg",name:"Disability Support"}]

  bestCars:object[]=[{},{}] 
  constructor() { }


  ngOnInit() {
  }

}
