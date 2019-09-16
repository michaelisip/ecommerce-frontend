import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { OrdersIndexComponent } from "./index/orders-index.component";
import { OrdersCreateComponent } from "./create/orders-create.component";
import { OrdersShowComponent } from './show/orders-show.component';
import { AuthGuard } from 'src/app/services/guards/auth.guard';

const routes: Routes = [
  { path: 'orders',
    canActivate: [
      AuthGuard
    ],
    children: [
      { path: '', pathMatch: 'full', component: OrdersIndexComponent },
      { path: ':id/show', pathMatch: 'full', component: OrdersShowComponent },
      { path: 'create', pathMatch: 'full', component: OrdersCreateComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderModule { }
