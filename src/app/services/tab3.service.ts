import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tab3Service {
  private _salary:string;
  private _company:string;

  constructor() { }


  getsalary(): string {
    return this._salary;
  }

  setsalary(value: string) {
    this._salary = value;
  }

  getcompany(): string {
    return this._company;
  }

  setcompany(value: string) {
    this._company = value;
  }
}
