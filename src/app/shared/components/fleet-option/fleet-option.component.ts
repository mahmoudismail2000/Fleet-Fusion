import { CommonModule } from '@angular/common';
import { Component, effect, EventEmitter, Input, OnInit, Output, output, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonSkeletonText, IonIcon } from "@ionic/angular/standalone";
import { AuthService } from 'src/app/auth/services/auth.service';
import { FleetOptions } from 'src/app/core/enums/fleet-options';
import { FleetOption } from 'src/app/core/models/fleet-option';

@Component({
  selector: 'app-fleet-option',
  templateUrl: './fleet-option.component.html',
  styleUrls: ['./fleet-option.component.scss'],
  imports:[CommonModule,IonicModule],
  standalone: true,
})
export class FleetOptionComponent  implements OnInit {

  @Input() fleetOption!:FleetOption
  @Input() type!:string
  @Input() isActive!:boolean
  @Output() optionSelected:EventEmitter<any>=new EventEmitter<FleetOptions>()


  constructor(private router:Router,public authService:AuthService) {
    
   }

  

  ngOnInit() {
    
  }
  onSelectOption(option:string){

    if(this.type=="fleetDetails"){
      this.authService.selectedOption.set(option)
    }
    if(option==FleetOptions.Delivery&&this.type!=="fleetDetails"){
      this.router.navigate(['/fleet/fleet-listing'])
    }
    this.optionSelected.emit(option)
  }

}
