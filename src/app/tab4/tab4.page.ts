import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Tab1Service} from '../services/tab1.service';
import {Tab2Service} from '../services/tab2.service';
import {Tab3Service} from '../services/tab3.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  name: string;
  address: string;
  country: string;
  tele: string;
  city: string;
  salary: string;
  company: string;

  constructor(private router:Router, private tab1Services: Tab1Service,private  tab2Services: Tab2Service, private tab3Services: Tab3Service) { }


  ngOnInit() {
    console.log('sadasd');
    this.name=this.tab1Services.getname();
    this.address=this.tab1Services.getaddress();
    this.country=this.tab1Services.getcountry();

    this.tele=this.tab2Services.gettele();
    this.city=this.tab2Services.getcity();

    this.salary=this.tab3Services.getsalary();
    this.company=this.tab3Services.getcompany();
  }
  reload(){
    console.log('re');

    this.name=this.tab1Services.getname();
    this.address=this.tab1Services.getaddress();
    this.country=this.tab1Services.getcountry();

    this.tele=this.tab2Services.gettele();
    this.city=this.tab2Services.getcity();

    this.salary=this.tab3Services.getsalary();
    this.company=this.tab3Services.getcompany();

  }

}
