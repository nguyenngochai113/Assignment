import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router' ;
import { map } from 'rxjs/operators';
import {quiz} from '../model/quiz';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  quiz;
  config;  
  public id;
  c;
  constructor(private service : DataService , private route : ActivatedRoute, private router : Router) { 
    
  }
  
  listChoose = [];
  change(choose, index) {
    this.listChoose[index] = choose
   

  }
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id')
    this.service.getquiz(this.id).pipe(
      map(quiz => this.quiz = quiz)
       ).subscribe(quiz => {
        this.config.totalItems = quiz.length
    })
  })
  this.config = {
    itemsPerPage : 1,
    currentPage: 1,
    totalItems: 0
  }
  
  }
  onSubmit() {
    let mark =0;
    let diem = 0;
    for(var i = 0; i < this.listChoose.length; i++) {
      if(this.quiz[i].Answers[this.listChoose[i] -1].Id === this.quiz[i].AnswerId) {
        mark++;
      }
    }
    alert("Chúc mừng bạn đã hoàn thành bài thi")
    mark = parseFloat((mark / this.config.totalItems).toFixed(2));
    localStorage.setItem('mark' , diem.toString())
    localStorage.setItem('cau' , mark.toString())
    this.router.navigate(['ketqua'])
    
    
    
  }
  up() {
    this.config.currentPage++;
  }
  down() {
    this.config.currentPage--;
  }
  firstpage() {
    this.config.currentPage = 1
  }
  lastpage() {
    this.config.currentPage = this.config.totalItems;
  }
}