import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService {
  constructor(private http: HttpClient) {}

  sendTask(details) {
    console.log(details);
    // this.http.post('http://localhost:9000/api/POST', details);
  }
}
