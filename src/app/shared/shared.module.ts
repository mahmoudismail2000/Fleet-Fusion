import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetOptionComponent } from './components/fleet-option/fleet-option.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UpcomingItemComponent } from './components/upcoming-item/upcoming-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarItemComponent } from './components/car-item/car-item.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FleetOptionComponent,
    TabsComponent,
    UpcomingItemComponent,
    BrandComponent,
    CarItemComponent
    

  ]
})
export class SharedModule { }
