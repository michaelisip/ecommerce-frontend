import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private form: FormBuilder
  ) {
    this.loginForm = this.loginFormGroup()
  }

  ngOnInit() {
  }

  loginFormGroup() {
    return this.form.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

}
