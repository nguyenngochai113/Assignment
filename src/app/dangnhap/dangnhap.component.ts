import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service'
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
 
  constructor(
  
    private title: Title,
    private authservice: AuthService,
  ) {
    this.title.setTitle('login')
   }
  

  ngOnInit() {
  }

}
