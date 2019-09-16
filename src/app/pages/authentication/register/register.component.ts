import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";

import { AuthenticationService } from "../authentication.service";

import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private authService: AuthenticationService,
    private form: FormBuilder,
    private cookie: CookieService,
    private route: Router
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
        data => {
          this.cookie.set('token', data.access_token)
          this.route.navigate(['/products'])
          console.log(data)
        }
      )
  }

}
