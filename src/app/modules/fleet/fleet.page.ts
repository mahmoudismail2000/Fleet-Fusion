import { Component, OnInit } from '@angular/core';
import { FleetOptions } from 'src/app/core/enums/fleet-options';
import { Brand } from 'src/app/core/models/brand';
import { FleetOption } from 'src/app/core/models/fleet-option';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.page.html',
  styleUrls: ['./fleet.page.scss'],
  standalone:false
})
export class FleetPage implements OnInit {

  bestCars:object[]=[{},{}]  
  fleetOptionSelected!:string
  constructor() { }

fleetDataList:FleetOption[]=[{img:"./assets/icons/Delivery.svg",name:"Delivery"},
      {img:"./assets/icons/Pickup.svg",name:"Pickup"},
      {img:"./assets/icons/PickupAirport.svg",name:"Pickup From Airport"},
      {img:"./assets/icons/Delivery.svg",name:"Disability Support"}]

      brandDataList:Brand[]=[{img:"./assets/images/Audi.jpg",brand:"Audi"},
      {img:"./assets/images/BMW.jpg",brand:"BMW"},
      {img:"./assets/images/Porsche.jpg",brand:"Porsche"},
      {img:"./assets/images/BMW.jpg",brand:"BMW"},
      {img:"./assets/images/Porsche.jpg",brand:"Porsche"}]
  

  
  
  ngOnInit() {

    
  }
  onSelectedFleetOptions(event:string){
    this.fleetOptionSelected=event
  }

}
