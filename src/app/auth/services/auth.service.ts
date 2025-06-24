import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   private _skip:WritableSignal<boolean> = signal(false);
  selectedOption:WritableSignal<string> = signal('Delivery');


  skip:Signal<boolean> = this._skip.asReadonly();
 

  setSkip(value: boolean) {
    this._skip.set(value);
  }
  
}
