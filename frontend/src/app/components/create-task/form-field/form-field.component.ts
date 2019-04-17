import { Component, OnInit, Input, Output } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
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
  names = ['Alek', 'Patryk', 'Maks'];
  startValidation = false;
  constructor() {}

  ngOnInit() {
    Object.keys(this.form.controls).forEach(fc => {
      this.fcNameArray.push(fc);
    });
    for (let key in this.form.controls) {
      this.details[key] = this.form.controls[key].value;
    }
  }
  checkName = (control: AbstractControl): { [key: string]: boolean } | null => {
    let nameExist = null;
    this.names.forEach(name => {
      if (name == control.value) {
        nameExist = true;
      }
    });
    return !nameExist ? { nameNotExist: true } : null;
  };
  form = new FormGroup({
    assignedTo: new FormControl('alek', [
      Validators.required,
      this.checkName,
      Validators.pattern(/\w/g)
    ]),
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
    this.startValidation = true;
    this.details['assignedTo'] = this.details['assignedTo']
      .replace(/\W+/g, ' ')
      .trim();
    this.details['topic'] = this.details['topic']
      .replace(/[^\w\d]/g, ' ')
      .trim();
    this.taskDetails.emit(this.details);
  }
}
