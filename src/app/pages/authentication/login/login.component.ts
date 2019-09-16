import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private authService: AuthenticationService,
    private form: FormBuilder
  ) {
    this.loginForm = this.loginFormGroup()
  }

  ngOnInit() {
  }

  loginFormGroup() {
    return this.form.group({
      email: [null],
      password: [null]
    })
  }

  login() {
    console.log(this.loginForm.value)
    return this.authService.login(this.loginForm.value)
      .subscribe(
        data => console.log(data)
      )
  }

}
