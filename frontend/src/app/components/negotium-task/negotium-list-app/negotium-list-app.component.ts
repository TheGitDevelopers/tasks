import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-negotium-list-app',
  templateUrl: './negotium-list-app.component.html',
  styleUrls: ['./negotium-list-app.component.scss']
})
export class NegotiumListAppComponent implements OnInit {
  check: Boolean = true;
  @Input() status;
  @Input() mode;
  @Input() name;
  @Input() id;
  constructor() {}

  ngOnInit() {
    this.status == 'In progress' ? (this.check = false) : (this.check = true);
  }
}
