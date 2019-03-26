import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css','./form-field-css.component.css']
})
export class FormFieldComponent implements OnInit {

  constructor() { }
  @Input() NameInput;
  @Input() Name;
  ngOnInit() {
  }
  Name = new FormControl('');


}
