import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./pages/home/home.component"
import { ProductsListComponent } from "./pages/products-list/products-list.component"
import { ProductDetailsComponent } from "./pages/product-details/product-details.component"
import { ProductNewComponent } from "./pages/product-new/product-new.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    children: [
      { path: '', pathMatch:'full', component: ProductsListComponent },
      { path: 'create', pathMatch:'full', component: ProductNewComponent },
      { path: ':id/show', pathMatch:'full', component: ProductDetailsComponent }
    ]
  },
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
