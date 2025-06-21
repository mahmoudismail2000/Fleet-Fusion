import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleetDetailsPage } from './fleet-details.page';

const routes: Routes = [
  {
    path: '',
    component: FleetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleetDetailsPageRoutingModule {}
