import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  dataList:string[]=["BMW","Toyota","Mercedes","Fiat"]
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    spaceBetween: 22,
    speed: 400,
    loop: false,
    dir: '',
    autoplay: 1000,
  };

}
