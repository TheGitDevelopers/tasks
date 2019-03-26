import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css','./form-field-css.component.css']
})
export class FormFieldComponent implements OnInit {
  form = new FormGroup({
    sampleInput: new FormControl('', Validators.required),
    estimatedTime: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    assignedTo: new FormControl('', Validators.required)

  });

  constructor() { }
  @Input() NameInput;
  @Input() Name;
  ngOnInit() {
  }

   takeInputName(name) {
    return name;
  }

  get sampleInput() {
    return this.form.get("sampleInput");
  }

  ngOnInit(){
    console.log(this.sampleInput)
  }

}
