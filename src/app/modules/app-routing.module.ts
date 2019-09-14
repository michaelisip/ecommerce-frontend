import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { OrderModule } from "../pages/orders/order.module";
import { ProductModule } from "../pages/products/product.module";
import { UserModule } from "../pages/users/user.module";
import { HomeComponent } from '../pages/home/home.component';
import { AuthenticationModule } from '../pages/authentication/authentication.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
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
      UserModule,
      AuthenticationModule
   ]
})
export class AppRoutingModule { }
