import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { OrderModule } from "../pages/orders/order.module";
import { ProductModule } from "../pages/products/product.module";

import { HomeComponent } from "../pages/user/home/home.component"
import { ProductsListComponent } from "../pages/admin/products/products-list/products-list.component"
import { ProductDetailsComponent } from "../pages/admin/products/product-details/product-details.component"
import { ProductNewComponent } from "../pages/admin/products/product-new/product-new.component"
import { ListComponent } from "../pages/user/orders/list/list.component"
import { CreateComponent } from "../pages/user/orders/create/create.component"
import { DetailsComponent } from "../pages/user/orders/details/details.component"
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from "../pages/user/products/products.component";
import { OrdersComponent } from "../pages/admin/orders/orders.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
   declarations: [
   ],
   imports: [
      CommonModule,
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule,
      OrderModule,
      ProductModule,
   ]
})
export class AppRoutingModule { }
