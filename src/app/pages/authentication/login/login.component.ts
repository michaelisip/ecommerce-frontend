import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from "../authentication.service";

import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private authService: AuthenticationService,
    private form: FormBuilder,
    private cookie: CookieService
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
        data => {
          this.cookie.set('token', data.access_token)
          console.log(data)
        }
      )
  }

}
