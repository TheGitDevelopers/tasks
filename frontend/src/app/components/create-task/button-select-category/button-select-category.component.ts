import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-select-category',
  templateUrl: './button-select-category.component.html',
  styleUrls: ['./button-select-category.component.css']
})
export class ButtonSelectCategoryComponent implements OnInit {

  constructor() { }
  @Input() selectCategory;
  @Input() selectClass;
  @Input() name;
  ngOnInit() {
  }

}
