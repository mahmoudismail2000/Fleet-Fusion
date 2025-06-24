import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter} from '@angular/core';
import { FleetOptionComponent } from '../fleet-option/fleet-option.component';
import { BrandComponent } from '../brand/brand.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarItemComponent } from '../car-item/car-item.component';
import { RouterLink } from '@angular/router';
import { FleetOptions } from 'src/app/core/enums/fleet-options';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports:[CommonModule,IonicModule,FleetOptionComponent,BrandComponent,CarItemComponent,RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class SliderComponent  implements OnInit {

  constructor() { }


  @Input() type!: string;
  @Input() dataList!: any[];
  @Input() path!: string;
  @Input() slidesPerView!: number;
  @Output() optionSelected:EventEmitter<any>=new EventEmitter<FleetOptions>()

  ngOnInit() {
    
  }
  onSelectOption(event:any){
    this.optionSelected.emit(event)
  }
  



 

}
