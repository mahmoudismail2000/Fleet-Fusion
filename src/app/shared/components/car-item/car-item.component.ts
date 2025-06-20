import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
  imports:[CommonModule,IonicModule],
  standalone: true,
})
export class CarItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
