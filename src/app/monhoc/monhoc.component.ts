import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {
  subjects;
  config;
  constructor(private service : DataService) { }

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


