import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  imports:[CommonModule,IonicModule],
  standalone: true,
  
  
})
export class SplashComponent  implements OnInit {
@ViewChild('myElement') myElement!: ElementRef;
  constructor(private renderer2:Renderer2,private router:Router) { }

   

  ngOnInit() {
    setTimeout(()=>{
this.renderer2.addClass(this.myElement.nativeElement,'splashAnimate')
setTimeout(()=>{
  this.router.navigate(['/intro'])
},1500)

    },500)
  }
}
