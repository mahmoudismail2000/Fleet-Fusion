import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleetListingPage } from './fleet-listing.page';

const routes: Routes = [
  {
    path: '',
    component: FleetListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetListingPageRoutingModule {}
