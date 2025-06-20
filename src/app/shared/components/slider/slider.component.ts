import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import { FleetOptionComponent } from '../fleet-option/fleet-option.component';
import { BrandComponent } from '../brand/brand.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarItemComponent } from '../car-item/car-item.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports:[CommonModule,IonicModule,FleetOptionComponent,BrandComponent,CarItemComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class SliderComponent  implements OnInit {

  constructor() { }


  @Input() type!: string;
  @Input() dataList!: any[];
  @Input() path!: string;
  @Input() slidesPerView!: number;
  



  ngOnInit() {}

}
