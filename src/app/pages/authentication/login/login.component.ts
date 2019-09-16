import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";

import { Store } from "@ngxs/store";
import { Login } from '../auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private form: FormBuilder,
    private store: Store,
    private route: Router
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
    return this.store.dispatch(new Login(this.loginForm.value))
      .subscribe(
        () => this.route.navigate(['/']),
        error => console.warn(error)
      )
  }

}
