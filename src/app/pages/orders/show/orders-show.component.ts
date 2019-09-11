import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { OrderService } from "../order.service";
import { ProductService } from "../../products/product.service";

import { Order } from '../order';
import { Product } from '../../products/product';
import { ApiReponse } from 'src/app/interfaces/api-reponse';

@Component({
  selector: 'app-orders-show',
  templateUrl: './orders-show.component.html',
  styleUrls: ['./orders-show.component.css']
})
export class OrdersShowComponent implements OnInit {

  order: Order
  orderItems = []
  products = []
  id: number
  body: {
    status: number,
    user_id: number,
    products: []
  }
  pagination = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.onReload()
  }

  onReload() {
    this.fetchData()
    this.fetchProducts(1)
  }

  fetchData() {
    return this.orderService.getOrderById(this.id)
      .subscribe(
        (data: Order) => {
          this.order.status = data.status,
          this.order.user_id = data.user_id,
          this.orderItems = data.products
          console.log(data)
        },
        error => console.warn(error)
      )
  }

  fetchProducts(page: number) {
    this.pagination.page = page
    return this.productService.getProducts(this.pagination)
      .subscribe(
        (data: ApiReponse) => {
          this.products = data.data,
          this.pagination.page = data.current_page,
          this.pagination.per_page = data.per_page,
          this.pagination.total_pages = data.last_page,
          this.pagination.total = data.total
          console.log(data)
        },
        error => console.warn(error)
      )
  }

  updateOrder() {
    return this.orderService.updateOrderById(this.id, this.body)
      .subscribe(
        (data: any) => window.location.reload(),
        error => console.warn(error)
      )
  }

  formatOrderBody() {
    let orderProducts = []
    this.orderItems.forEach(function(item) {
      orderProducts.push({
        product_id: item.id,
        qty: 1
      })
    })

    return orderProducts
  }

  addProduct(product: Product) {
    // To do
  }

  removeProduct(index: number) {
    this.orderItems.splice(index, 1)
  }

}
