import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService {
  constructor(private http: HttpClient) {}

  sendTask(details) {
    return this.http.post('http://localhost:9000/api/tasks', details);
  }
}
