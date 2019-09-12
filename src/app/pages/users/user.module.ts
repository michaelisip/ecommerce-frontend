import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";

import { UsersIndexComponent } from "./index/users-index.component";
import { UsersCreateComponent } from "./create/users-create.component";
import { UsersShowComponent } from "./show/users-show.component";

const routes: Routes = [
  { path: 'users',
    children: [
      { path: '', pathMatch: 'full', component: UsersIndexComponent },
      { path: ':id/show', pathMatch: 'full', component: UsersShowComponent },
      { path: 'create', pathMatch: 'full', component: UsersCreateComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
