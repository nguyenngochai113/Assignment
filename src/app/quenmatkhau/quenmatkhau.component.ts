import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
