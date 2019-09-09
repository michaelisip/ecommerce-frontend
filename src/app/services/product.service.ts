import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { productsEndpoint } from "../../environments/environment";

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

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get(productsEndpoint)
  }

  getProductPage(page) {
    return this.http.get(productsEndpoint + '?page=' + page)
  }

  getProduct(id: number) {
    return this.http.get(productsEndpoint + `/${id}`)
  }

  addProduct(payload: any) {
    return this.http.post(productsEndpoint, payload, httpOptions)
  }

  updateProduct(id: number, payload: any) {
    return this.http.put(productsEndpoint + `/${id}`, payload, httpOptions)
  }

  deleteProduct(id) {
    return this.http.delete(productsEndpoint + `/${id}`)
  }

}
