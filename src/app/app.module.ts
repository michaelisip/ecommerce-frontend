import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductNewComponent } from './pages/product-new/product-new.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductNewComponent
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
