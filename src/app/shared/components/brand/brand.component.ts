import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Brand } from 'src/app/core/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  imports:[CommonModule,IonicModule],
  standalone: true,
})
export class BrandComponent  implements OnInit {

  constructor() { }

  @Input() brand!:Brand
  ngOnInit() {}

}
