import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {
  subjects;
  config;
  isLoggedin
  constructor(private service : DataService, route: Router) { 
    const user = localStorage.getItem('user');
    this.isLoggedin = (!user || user == 'null') ? false:true;
    if (!this.isLoggedin) {
      route.navigate(['/dangnhap']);
    }
  }

  ngOnInit() {
    this.service.getsubject().subscribe(subject => {
      this.subjects = subject
    })
    this.config = {
      itemsPerPage : 4,
      currentPage: 1,
      totalItems: 0
    }
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  
  }


