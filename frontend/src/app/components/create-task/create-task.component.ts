import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css', '/create-task-rwd.component.css']
})
export class CreateTaskComponent implements OnInit {
  buttonsArray: Array<object> = [
    {
      value: <number>1
    },
    {
      value: <number>2
    },
    {
      value: <number>3
    },
    {
      value: <number>4
    },
    {
      value: <number>5
    },
    {
      value: <number>6
    },
    {
      value: <number>7
    },
    {
      value: <number>8
    },
    {
      value: <number>9
    },
    {
      value: <number>10
    }
  ];

  returnLevel(value) {
    return value < 4 ? ' easy ' : value < 7 ? 'medium' : 'hard';
  }

  constructor() {}

  ngOnInit() {}
}
