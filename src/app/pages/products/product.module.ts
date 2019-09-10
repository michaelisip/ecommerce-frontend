import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { ProductsIndexComponent } from "./index/products-index.component";
import { ProductsCreateComponent } from "./create/products-create.component";

const routes: Routes = [
  { path: 'products',
    children: [
      { path: '', pathMatch: 'full', component: ProductsIndexComponent },
      { path: 'create', pathMatch: 'full', component: ProductsCreateComponent },
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
export class ProductModule { }
