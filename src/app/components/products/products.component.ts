import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { OrdersService } from '../../services/orders.service';

import { Product } from '../../interfaces/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  collectionSize;
  page;
  maxSize;

  constructor(
    public productService: ProductService,
    public orderService: OrdersService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products,
        this.collectionSize = products.total
        this.page = products.current_page
        this.maxSize = products.per_page
      })
  }

  getProductPage(page) {
    this.productService.getProductPage(page)
      .subscribe(products => {
        this.products = products,
        this.collectionSize = products.total
        this.page = products.current_page
        this.maxSize = products.per_page
      })
  }

}
