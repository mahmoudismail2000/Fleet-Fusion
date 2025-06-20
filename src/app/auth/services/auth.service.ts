import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   private _skip = signal(false);


  skip = this._skip.asReadonly();


  setSkip(value: boolean) {
    this._skip.set(value);
  }
  
}
