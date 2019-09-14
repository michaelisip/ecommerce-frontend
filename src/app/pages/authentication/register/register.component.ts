import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private form: FormBuilder
  ) {
    this.registerForm = this.registerFormGroup()
  }

  ngOnInit() {
  }

  registerFormGroup() {
    return this.form.group({
      name: [null, Validators.required, Validators.max(255)],
      email: [null, Validators.required],
      password: [null, Validators.required, Validators.minLength(6)]
    })
  }

}
