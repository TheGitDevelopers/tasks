import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-negotium-list-app',
  templateUrl: './negotium-list-app.component.html',
  styleUrls: ['./negotium-list-app.component.css']
})
export class NegotiumListAppComponent implements OnInit {
  @Input() check;
  constructor() {}

  ngOnInit() {}
}
