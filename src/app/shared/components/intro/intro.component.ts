import { AuthService } from './../../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports:[CommonModule,IonicModule,RouterLink],
  standalone: true,
})
export class IntroComponent  implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {}
  skip(){
    this.authService.setSkip(true)
    localStorage.setItem('skip',"skip")
  }

}
