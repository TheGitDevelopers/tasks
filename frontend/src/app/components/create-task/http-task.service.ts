import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService {
  constructor(private http: HttpClient) {}

  sendTask(details) {
    this.http
      .post('http://localhost:9000/api/tasks', details)
      .subscribe(data => window.alert('Send successfully'));
  }
}
