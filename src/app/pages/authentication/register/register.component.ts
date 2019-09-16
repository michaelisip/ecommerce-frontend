import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";

import { AuthenticationService } from "../authentication.service";

import { CookieService } from "ngx-cookie-service";

import { Store } from "@ngxs/store";
import { Register } from '../auth.model';

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
    private route: Router,
    private store: Store
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
    return this.store.dispatch(new Register(this.registerForm.value))
      .subscribe(
        () => this.route.navigate(['/']),
        error => console.warn(error)
      )
  }

}
