import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {quiz} from '../model/quiz';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getsubject() {
    return this.http.get('../../assets/data/Subjects.json');
  }
  getquiz(id) : Observable<quiz[]>{
    return this.http.get<quiz[]>(`../../assets/data/${id}.json`);
  }

}
