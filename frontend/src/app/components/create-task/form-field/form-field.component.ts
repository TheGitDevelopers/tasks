import { Component, OnInit, Input, Output } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss', './form-field-css.component.css']
})
export class FormFieldComponent implements OnInit {
  @Output() taskDetails: EventEmitter<any> = new EventEmitter();
  fcNameArray = [];
  details: Object = {};
  constructor() {}

  ngOnInit() {
    Object.keys(this.form.controls).forEach(fc => {
      this.fcNameArray.push(fc);
    });
    console.log(this.fcNameArray);
    for (let key in this.form.controls) {
      this.details[key] = this.form.controls[key].value;
    }
  }

  form = new FormGroup({
    assignedTo: new FormControl('alek', Validators.required),
    topic: new FormControl('frontend', Validators.required),
    estimatedTime: new FormControl('time', Validators.required),
    status: new FormControl('status', Validators.required)
  });

  parseString(labelName) {
    return (
      labelName[0].toUpperCase() +
      labelName
        .slice(1)
        .replace(/([a-z](?=[A-Z]))/g, '$1 ')
        .toLowerCase()
    );
  }

  emitTaskDetails() {
    this.taskDetails.emit(this.details);
  }
}
