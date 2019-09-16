import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from './app.component';
import { NavComponent } from './themes/components/nav/nav.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { ProductsCreateComponent } from './pages/products/create/products-create.component';
import { ProductsIndexComponent } from './pages/products/index/products-index.component';
import { ProductsShowComponent } from "./pages/products/show/products-show.component";
import { OrdersIndexComponent } from './pages/orders/index/orders-index.component';
import { OrdersShowComponent } from "./pages/orders/show/orders-show.component";
import { OrdersCreateComponent } from './pages/orders/create/orders-create.component';
import { UsersIndexComponent } from './pages/users/index/users-index.component';
import { UsersShowComponent } from './pages/users/show/users-show.component';
import { UsersCreateComponent } from './pages/users/create/users-create.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from "./pages/authentication/login/login.component";
import { RegisterComponent } from "./pages/authentication/register/register.component";

import { Interceptor } from "./services/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrderStatusPipe,
    ProductsCreateComponent,
    ProductsIndexComponent,
    ProductsShowComponent,
    OrdersIndexComponent,
    OrdersShowComponent,
    OrdersCreateComponent,
    UsersIndexComponent,
    UsersShowComponent,
    UsersCreateComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
