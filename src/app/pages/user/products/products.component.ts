import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';
import { OrdersService } from '../../../services/orders.service';
import { CartService } from "../../../services/cart.service";

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
    public orderService: OrdersService,
    public cartService: CartService,
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => {
        this.products = data.data,
        this.collectionSize = data.total
        this.page = data.current_page
        this.maxSize = data.per_page
      })
  }

  getProductPage(page) {
    this.productService.getProductPage(page)
      .subscribe((data: any) => {
        this.products = data.data,
        this.collectionSize = data.total
        this.page = data.current_page
        this.maxSize = data.per_page
      })
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(
        error => console.warn(error)
      )
  }

  addToCart(product) {
    this.cartService.addToCart(product)
  }
}
