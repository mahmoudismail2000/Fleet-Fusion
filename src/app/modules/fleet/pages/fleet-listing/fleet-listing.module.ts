import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleetListingPageRoutingModule } from './fleet-listing-routing.module';

import { FleetListingPage } from './fleet-listing.page';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { CarItemComponent } from "../../../../shared/components/car-item/car-item.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleetListingPageRoutingModule,
    SliderComponent,
    CarItemComponent
],
  declarations: [FleetListingPage]
})
export class FleetListingPageModule {}
