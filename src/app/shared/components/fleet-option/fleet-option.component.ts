import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonSkeletonText, IonIcon } from "@ionic/angular/standalone";
import { FleetOption } from 'src/app/core/models/fleet-option';

@Component({
  selector: 'app-fleet-option',
  templateUrl: './fleet-option.component.html',
  styleUrls: ['./fleet-option.component.scss'],
  imports:[CommonModule,IonicModule,RouterLink],
  standalone: true,
})
export class FleetOptionComponent  implements OnInit {

  constructor() { }

  @Input() fleetOption!:FleetOption
  @Input() isActive!:boolean

  ngOnInit() {
    
  }

}
