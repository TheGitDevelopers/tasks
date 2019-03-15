import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
    });
  }

  contentSwap() {
    switch (this.mode) {
      case 'othertasks':
        this.title = 'Other Tasks';
        return this.otherTasks;
      case 'yourapp':
        this.title = 'Your Negotium App';
        return this.yourApp;
    }
  }
}
