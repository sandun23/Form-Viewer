import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tab3Service} from '../services/tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  salary;
  company;


  constructor(private router:Router, private tab3Service:Tab3Service) {
  }

  ngOnInit() {
    this.salary=this.tab3Service.getsalary();
    this.company=this.tab3Service.getcompany();
  }

  OnPaymentClick(){
    this.tab3Service.setsalary(this.salary);
    this.tab3Service.setcompany(this.company);
  }
}
