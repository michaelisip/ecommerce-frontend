import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { OrderModule } from "../pages/orders/order.module";
import { ProductModule } from "../pages/products/product.module";
import { UserModule } from "../pages/users/user.module";

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
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
      UserModule
   ]
})
export class AppRoutingModule { }
