import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports:[CommonModule,RouterLink,RouterLinkActive,IonicModule],
  standalone: true,
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
