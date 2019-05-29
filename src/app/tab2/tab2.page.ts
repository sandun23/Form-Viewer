import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tab2Service} from '../services/tab2.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tele;
  city;
  constructor( private router:Router, private tbl2Service:Tab2Service) {
  }

  ngOnInit() {
    this.tele = this.tbl2Service.gettele();
    this.city = this.tbl2Service.getcity();
  }

  OnContactClick(){
    this.tbl2Service.settele(this.tele);
    this.tbl2Service.setcity(this.city);

  }
}
