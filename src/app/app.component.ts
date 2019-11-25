import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { auth } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'haidz';
  items: Observable<any[]>;
  isLoggedin
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
  ngOnInit() {
    // const user = localStorage.getItem('user');
    // this.isLoggedin = (!user || user == 'null') ? false:true;
    
  }  
}
