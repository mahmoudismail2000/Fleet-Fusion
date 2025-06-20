import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-upcoming-item',
  templateUrl: './upcoming-item.component.html',
  styleUrls: ['./upcoming-item.component.scss'],
  imports:[CommonModule,IonicModule],
  standalone: true,
})
export class UpcomingItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
