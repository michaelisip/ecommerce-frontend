import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './themes/components/nav/nav.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { ProductsCreateComponent } from './pages/products/create/products-create.component';
import { ProductsIndexComponent } from './pages/products/index/products-index.component';
import { OrdersIndexComponent } from './pages/orders/index/orders-index.component';
import { OrdersCreateComponent } from './pages/orders/create/orders-create.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrderStatusPipe,
    ProductsCreateComponent,
    ProductsIndexComponent,
    OrdersIndexComponent,
    OrdersCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
