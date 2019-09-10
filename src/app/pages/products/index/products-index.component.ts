import { Component, OnInit } from '@angular/core';

import { ProductService } from "../product.service";

import { ApiReponse } from "../../../interfaces/api-reponse";
import { Product } from "../product";

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.css']
})
export class ProductsIndexComponent implements OnInit {

  products: Product[]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(
        (data: ApiReponse) => this.products = data.data,
        error => console.warn(error)
      )
  }

}
