import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  quiz;
  config;
  c;
  constructor(private service : DataService , private route : ActivatedRoute) { 
    
  }
  
  listChoose = []
  change(choose , index) {
    this.listChoose[index] = choose;
    console.log(choose);
    
  }
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    this.service.getquiz(id).subscribe(quiz => {
      this.quiz = quiz;
    })
  })
  this.config = {
    itemsPerPage : 1,
    currentPage: 1,
    totalItems: 0
  }
  }
  up() {
    this.config.currentPage ++;
  }
  back() {
    this.config.currentPage--;
  }
}
