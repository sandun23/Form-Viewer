import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tab2Service {
  private _tele:string;
  private _city:string;

  constructor() { }

  gettele(): string {
    return this._tele;
  }

  settele(value: string) {
    this._tele = value;
  }

  getcity(): string {
    return this._city;
  }

  setcity(value: string) {
    this._city = value;
  }
}
