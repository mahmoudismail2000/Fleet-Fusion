import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleetPage } from './fleet.page';

const routes: Routes = [
  {
    path: '',
    component: FleetPage
  },
  {
    path: 'fleet-listing',
    loadChildren: () => import('./pages/fleet-listing/fleet-listing.module').then( m => m.FleetListingPageModule)
  },
  {
    path: 'fleet-details/:id',
    loadChildren: () => import('./pages/fleet-details/fleet-details.module').then( m => m.FleetDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetPageRoutingModule {}
