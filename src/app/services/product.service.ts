import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsEndpoint = 'http://localhost:8000/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get(this.productsEndpoint)
  }

  getProductPage(page) {
    return this.http.get(this.productsEndpoint + '?page=' + page)
  }

}
