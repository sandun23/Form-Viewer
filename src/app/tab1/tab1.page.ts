import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tab1Service} from '../services/tab1.service';
import {NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  name;
  address;
  country;
  constructor(private router:Router, private tab1Service: Tab1Service, private navCtrl: NavController, public  alertCtrl:AlertController) {
  }


  OnClickReg() {
    // console.log(this.name);
    this.tab1Service.setname(this.name);
    this.tab1Service.setaddress(this.address);
    this.tab1Service.setcountry(this.country);

  }

  ngOnInit() {
      this.name =this.tab1Service.getname();
      this.address =this.tab1Service.getaddress();
      this.country =this.tab1Service.getcountry();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
