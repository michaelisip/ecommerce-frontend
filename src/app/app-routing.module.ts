import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from "./pages/home/home.component"
import { ProductsListComponent } from "./pages/products-list/products-list.component"
import { ProductDetailsComponent } from "./pages/product-details/product-details.component"
import { ProductNewComponent } from "./pages/product-new/product-new.component"
import { ListComponent } from "./pages/orders/list/list.component"
import { CreateComponent } from "./pages/orders/create/create.component"
import { DetailsComponent } from "./pages/orders/details/details.component"
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  // User
  { path: '', component: HomeComponent },
  {
    path: 'products',
    children: [
      { path: '', pathMatch:'full', component: ProductsListComponent },
      { path: 'create', pathMatch:'full', component: ProductNewComponent },
      { path: ':id/show', pathMatch:'full', component: ProductDetailsComponent }
    ],
  },
  {
    path: 'orders',
    children: [
      { path: '', pathMatch: 'full', component: ListComponent },
      { path: 'create', pathMatch: 'full', component: CreateComponent },
      { path: ':id/show', pathMatch: 'full', component: DetailsComponent },
    ],
  },

  // Admin
  { path: 'dashboard',
    children: [
      { path: '' , component: DashboardComponent },

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
