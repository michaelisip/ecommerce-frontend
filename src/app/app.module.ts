import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
