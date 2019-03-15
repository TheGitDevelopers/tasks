import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotium-task',
  templateUrl: './negotium-task.component.html',
  styleUrls: ['./negotium-task.component.scss']
})
export class NegotiumTaskComponent implements OnInit {
  mode: string;
  test = 'negotium-task-outer';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mode = params.get('mode');
    });
  }
}
