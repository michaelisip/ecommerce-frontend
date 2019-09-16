import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";

import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { CookieService } from "ngx-cookie-service";
import { AuthState } from './auth.state';

const routes: Routes = [
  { path: '',
    children: [
      { path: 'login', pathMatch: 'full', component: LoginComponent },
      { path: 'register', pathMatch: 'full', component: RegisterComponent },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([
      AuthState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationModule { }
