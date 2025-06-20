import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleetPageRoutingModule } from './fleet-routing.module';

import { FleetPage } from './fleet.page';
import { FleetOptionComponent } from "../../shared/components/fleet-option/fleet-option.component";
import { SliderComponent } from "../../shared/components/slider/slider.component";
import { CarItemComponent } from "../../shared/components/car-item/car-item.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleetPageRoutingModule,
    FleetOptionComponent,
    SliderComponent,
    CarItemComponent
],
  declarations: [FleetPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FleetPageModule {}
