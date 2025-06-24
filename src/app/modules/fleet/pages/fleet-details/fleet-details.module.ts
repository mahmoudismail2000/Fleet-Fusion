import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleetDetailsPageRoutingModule } from './fleet-details-routing.module';

import { FleetDetailsPage } from './fleet-details.page';
import { GoogleMapsModule } from '@angular/google-maps';
import { CarItemComponent } from 'src/app/shared/components/car-item/car-item.component';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleetDetailsPageRoutingModule,
    GoogleMapsModule,
    CarItemComponent,
    SliderComponent
    

  ],
  declarations: [FleetDetailsPage]
})
export class FleetDetailsPageModule {}
