import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./pages/home/home.component"
import { ProductsListComponent } from "./pages/products-list/products-list.component"
import { ProductDetailsComponent } from "./pages/product-details/product-details.component"
import { ProductNewComponent } from "./pages/product-new/product-new.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'new-product', component: ProductNewComponent },
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
export class AppRoutingModule { }
