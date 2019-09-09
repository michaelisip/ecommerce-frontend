import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './pages/user/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/user/product-details/product-details.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './pages/user/home/home.component';
import { ProductNewComponent } from './pages/user/product-new/product-new.component';
import { ListComponent } from './pages/user/orders/list/list.component';
import { CreateComponent } from './pages/user/orders/create/create.component';
import { DetailsComponent } from './pages/user/orders/details/details.component';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductNewComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
    OrderStatusPipe,
    DashboardComponent
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
