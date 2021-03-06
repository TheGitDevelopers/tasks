import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss']
})
export class MainButtonComponent implements OnInit {
  constructor() {}

  @Input() title;
  @Input() buttonClass;
  @Input() titleColor;
  @Input() href;
  @Input() mode;

  ngOnInit() {}
}
