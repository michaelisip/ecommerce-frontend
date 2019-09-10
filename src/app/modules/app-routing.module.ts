import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from "../pages/user/home/home.component"
import { ProductsListComponent } from "../pages/admin/products/products-list/products-list.component"
import { ProductDetailsComponent } from "../pages/admin/products/product-details/product-details.component"
import { ProductNewComponent } from "../pages/admin/products/product-new/product-new.component"
import { ListComponent } from "../pages/user/orders/list/list.component"
import { CreateComponent } from "../pages/user/orders/create/create.component"
import { DetailsComponent } from "../pages/user/orders/details/details.component"
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from "../pages/user/products/products.component";

const routes: Routes = [

  // User
  { path: '', component: HomeComponent },
  {
    path: 'products',
    children: [
      { path: '', pathMatch:'full', component: ProductsComponent },
      // { path: 'create', pathMatch:'full', component: ProductNewComponent },
      // { path: ':id/show', pathMatch:'full', component: ProductDetailsComponent }
    ],
  },
  {
    path: 'orders',
    children: [
      { path: '', pathMatch: 'full', component: ListComponent },
      // { path: 'create', pathMatch: 'full', component: CreateComponent },
      { path: ':id/show', pathMatch: 'full', component: DetailsComponent },
    ],
  },

  // Admin
  { path: 'dashboard',
    children: [
      { path: '' , component: DashboardComponent },
      {
        path: 'products',
        children: [
          // { path: '', component: } table
          // { path: '', component: }  create or update
        ],
      },
      {
        path: 'orders',
        children: [
          // { path: '', component: } table
          // { path: '', component: }  create or update
        ]
      }

    ],
  }
]

@NgModule({
   declarations: [
   ],
   imports: [
      CommonModule,
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
