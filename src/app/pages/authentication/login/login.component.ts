import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from "../authentication.service";

import { CookieService } from "ngx-cookie-service";

import { Store } from "@ngxs/store";
import { SetToken, GetToken } from '../auth.model';

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
    private cookie: CookieService,
    private store: Store
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
          this.store.dispatch(new SetToken(data.access_token))
          // this.store.dispatch(new GetToken())
          //   .subscribe(
          //     data => console.log(data.auth.token)
          //   )
        }
      )
  }

}
