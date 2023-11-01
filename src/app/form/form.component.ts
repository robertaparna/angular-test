import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationService} from "../validation.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private fb: FormBuilder
  ) {}

  form = this.fb.group(
    {
      name: ["", {validators: [Validators.required], updateOn: 'blur'}],
      surname: ["", {validators: [Validators.required], updateOn: 'blur'}],
      email: ["", {validators: [Validators.required, Validators.email], updateOn:'blur'}],
      experience: ["", {validators: [Validators.required, ValidationService.numberValid(1)], updateOn: 'blur'}],
    }
  );

  status = '';
  get name() {
    return this.form.get("name");
  }
  get surname() {
    return this.form.get("surname");
  }
  get email() {
    return this.form.get("email");
  }
  get experience() {
    return this.form.get("experience");
  }

  ngOnInit() {}

  clear() {
    this.status = 'cleared'
    this.form.reset();
  }

  submit() {
    if (this.form.valid) {
      this.status = 'success';
      this.form.reset();
    } else {
      this.status = 'error';
    }
  }

}
