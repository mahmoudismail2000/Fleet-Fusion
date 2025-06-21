import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleetDetailsPageRoutingModule } from './fleet-details-routing.module';

import { FleetDetailsPage } from './fleet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleetDetailsPageRoutingModule
  ],
  declarations: [FleetDetailsPage]
})
export class FleetDetailsPageModule {}
