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
  loading: boolean = false

  pagination: any = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.onReload()
  }

  onReload() {
    this.fetchData(1)
  }

  fetchData(page: number) {
    this.loading = false
    this.pagination.page = page
    return this.productService.getProducts(this.pagination)
      .subscribe(
        (data: ApiReponse) => {
          this.products = data.data,
          this.pagination.per_page = data.per_page,
          this.pagination.total = data.total
          this.pagination.total_pages = data.last_page,
          this.loading = false
        },
        (error: any) => console.warn(error)
      )
  }

  deleteData(id: number) {
    this.productService.deleteProductById(id)
      .subscribe(
        data => window.location.reload(),
        error => console.warn(error),
      )
  }

}
