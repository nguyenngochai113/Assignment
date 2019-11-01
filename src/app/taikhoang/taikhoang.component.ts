import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-taikhoang',
  templateUrl: './taikhoang.component.html',
  styleUrls: ['./taikhoang.component.css']
})
export class TaikhoangComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
