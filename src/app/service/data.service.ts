import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getsubject() {
    return this.http.get('../../assets/data/Subjects.json');
  }
  getquiz(id) {
    return this.http.get(`../../assets/data/${id}.json`);
  }
}
