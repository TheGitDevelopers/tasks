import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent implements OnInit {
  constructor() {}
  
  @Input() selectLevel;
  @Input() selectLevelIndividual;
  @Input() number;
  ngOnInit() {}
}
