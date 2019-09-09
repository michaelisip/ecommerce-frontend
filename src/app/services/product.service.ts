import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
}

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

  getProduct(id: number) {
    return this.http.get(this.productsEndpoint + `/${id}`)
  }

  addProduct(payload: any) {
    return this.http.post(this.productsEndpoint, payload, httpOptions)
  }

  deleteProduct(id) {
    return this.http.delete(this.productsEndpoint + `/${id}`)
  }

}
