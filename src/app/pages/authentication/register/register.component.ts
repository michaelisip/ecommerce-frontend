import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private authService: AuthenticationService,
    private form: FormBuilder
  ) {
    this.registerForm = this.registerFormGroup()
  }

  ngOnInit() {
  }

  registerFormGroup() {
    return this.form.group({
      name: [null],
      email: [null],
      password: [null],
      password_confirmation: [null]
    })
  }

  register() {
    // console.log(this.registerForm.value)
    return this.authService.register(this.registerForm.value)
      .subscribe(
        (data) => console.log(data)
      )
  }

}
