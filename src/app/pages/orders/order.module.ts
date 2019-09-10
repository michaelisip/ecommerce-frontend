import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { OrdersIndexComponent } from "./index/orders-index.component";
import { OrdersCreateComponent } from "./create/orders-create.component";
import { OrdersShowComponent } from './show/orders-show.component';

const routes: Routes = [
  { path: 'orders',
    children: [
      { path: '', pathMatch: 'full', component: OrdersIndexComponent },
      { path: ':id/show', pathMatch: 'full', component: OrdersShowComponent },
      { path: 'create', pathMatch: 'full', component: OrdersCreateComponent }
    ]
  }
]

@NgModule({
  declarations: [OrdersShowComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderModule { }
