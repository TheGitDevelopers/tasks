import { Component, OnInit } from '@angular/core';
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss', '/create-task-rwd.component.css']
})
export class CreateTaskComponent implements OnInit {
  buttonsArray = [
    {
      value: <number>1,
      isActive: <boolean>false
    },
    {
      value: <number>2,
      isActive: <boolean>false
    },
    {
      value: <number>3,
      isActive: <boolean>false
    },
    {
      value: <number>4,
      isActive: <boolean>false
    },
    {
      value: <number>5,
      isActive: <boolean>false
    },
    {
      value: <number>6,
      isActive: <boolean>false
    },
    {
      value: <number>7,
      isActive: <boolean>false
    },
    {
      value: <number>8,
      isActive: <boolean>false
    },
    {
      value: <number>9,
      isActive: <boolean>false
    },
    {
      value: <number>10,
      isActive: <boolean>false
    }
  ];

  returnLevel(value: number) {
    return value < 4 ? ' easy ' : value < 7 ? 'medium' : 'hard';
  }

  addActiveClass(isActive: boolean) {
    return isActive ? 'active' : '';
  }

  toggleActiveButton(button) {
    this.buttonsArray.forEach(btn => {
      if (btn.value != button.value) {
        btn.isActive = false;
      }
    });
    button.isActive = !button.isActive;
  }

  constructor() {}

  ngOnInit() {}
}
