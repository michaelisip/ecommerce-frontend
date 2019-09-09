import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
})

const options = { headers: headers}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsEndpoint = 'http://localhost:8000/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    this.http.get(this.productsEndpoint)
      .subscribe(
        products => console.log(products)
    )
  }

}
