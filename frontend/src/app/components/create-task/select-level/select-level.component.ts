import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: [
    './select-level.component.css',
    './select-level-rwd.component.css'
  ]
})
export class SelectLevelComponent implements OnInit {
  constructor() {}

  // @Input() selectLevel;
  // @Input() selectLevelIndividual;
  // @Input() number;
  @Input() value: number;

  ngOnInit() {}
}
