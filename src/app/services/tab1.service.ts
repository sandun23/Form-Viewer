import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private _name:string;
  private _address:string;
  private _country:string;

  constructor() { }


  getname(): string {
    return this._name;
  }

  setname(value: string ) {
    this._name = value;
    console.log(this._name);
  }

  getaddress(): string {
    return this._address;
  }

  setaddress(value: string) {
    this._address = value;
  }

  getcountry(): string {
    return this._country;
  }

  setcountry(value: string) {
    this._country = value;
  }
}
