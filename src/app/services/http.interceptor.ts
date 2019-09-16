import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from "ngx-cookie-service";

import { ProductService } from "../pages/products/product.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService,
    private productService: ProductService
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

    if (this.cookie.get('token')) {
      request = request.clone({
        setHeaders: {
          'Authorization' : 'Bearer ' + this.cookie.get('token')
        }
      })
    }

    return next.handle(request)
  }
}
