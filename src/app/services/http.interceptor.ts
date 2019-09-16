import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from "ngx-cookie-service";

import { ProductService } from "../pages/products/product.service";

import { Store } from "@ngxs/store";
import { GetToken } from '../pages/authentication/auth.model';
import { AuthState } from '../pages/authentication/auth.state';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService,
    private productService: ProductService,
    private store: Store
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
