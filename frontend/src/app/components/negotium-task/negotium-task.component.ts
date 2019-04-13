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
  tasks;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
    });
    this.contentSwap();
  }

  contentSwap() {
    switch (this.mode) {
      case 'othertasks':
        this.http
          .get<Array<Object>>('http://localhost:9000/api/tasks')
          .subscribe(tasks => {
            this.tasks = [...tasks];
          });
        this.title = 'Other Tasks';
      case 'yourapp':
        this.http
          .get<Array<Object>>('http://localhost:9000/api/tasks')
          .subscribe(tasks => {
            this.tasks = [...tasks];
          });
        this.title = 'Your Negotium App';
    }
  }
}
