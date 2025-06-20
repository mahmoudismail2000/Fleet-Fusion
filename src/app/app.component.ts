import { AuthService } from './auth/services/auth.service';
import { Component, signal } from '@angular/core';
import { FlowbiteService } from './core/service/flowbite.service';
import { register } from 'swiper/element/bundle';
import { skip } from 'rxjs';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private flowbiteService: FlowbiteService,public authService:AuthService) {}



  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      
    });
    if(localStorage.getItem('skip')=='skip'){
      this.authService.setSkip(true)

    }else{
      this.authService.setSkip(false)

    }
   
   
  }
 
}
