import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { ProductsIndexComponent } from "./index/products-index.component";
import { ProductsCreateComponent } from "./create/products-create.component";
import { ProductsShowComponent } from './show/products-show.component';

const routes: Routes = [
  { path: 'products',
    children: [
      { path: '', pathMatch: 'full', component: ProductsIndexComponent },
      { path: ':id/show', pathMatch: 'full', component: ProductsShowComponent },
      { path: 'create', pathMatch: 'full', component: ProductsCreateComponent },
    ]
  }
]

@NgModule({
  declarations: [ProductsShowComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
