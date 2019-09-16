import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from "ngx-cookie-service";

import { ProductService } from "../pages/products/product.service";

import { Store } from "@ngxs/store";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private store: Store
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

    const token = this.store.snapshot().auth.token

    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization' : 'Bearer ' + token
        }
      })
    }

    console.log(request)
    return next.handle(request)
  }
}
