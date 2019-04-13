import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-negotium-task',
  templateUrl: './negotium-task.component.html',
  styleUrls: ['./negotium-task.component.scss']
})
export class NegotiumTaskComponent implements OnInit {
  mode: string;
  title: string;
  otherTasks = [
    {
      name: 'Another task goes here',
      check: true
    },
    {
      name: 'Another task goes here',
      check: false
    },
    {
      name: 'Another task goes here',
      check: false
    },
    {
      name: 'Another task goes here',
      check: true
    },
    {
      name: 'Another task goes here',
      check: false
    },
    {
      name: 'Another task goes here',
      check: false
    }
  ];
  yourApp = [
    {
      name: 'Your Negotium App',
      check: true
    },
    {
      name: 'Your Negotium App',
      check: false
    },
    {
      name: 'Your Negotium App',
      check: false
    },
    {
      name: 'Your Negotium App',
      check: true
    },
    {
      name: 'Your Negotium App',
      check: false
    },
    {
      name: 'Your Negotium App',
      check: false
    }
  ];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
    });
  }

  contentSwap() {
    switch (this.mode) {
      case 'othertasks':
        // this.http.get('http://localhost:9000/api/get/othertasks').subscribe(tasks => {
        //   this.otherTasks = [...tasks];
        // });
        this.title = 'Other Tasks';
        return this.otherTasks;
      case 'yourapp':
        // this.http.get('http://localhost:9000/api/get/yourapp').subscribe(tasks => {
        //   this.yourApp = [...tasks];
        // });
        this.title = 'Your Negotium App';
        return this.yourApp;
    }
  }
}
