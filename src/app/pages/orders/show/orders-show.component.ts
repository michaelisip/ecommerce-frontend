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

  order: Order = {
    status: 0,
    user_id: 1,
    products: []
  }
  orderItems = [] // with name
  items = []
  products = []
  id: number
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
          data.products.forEach(element => {
            this.addProduct(element.product)
          });
          console.log(this.orderItems)
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
          console.log(data.data)
        },
        error => console.warn(error)
      )
  }

  updateOrder() {
    this.order.products = this.items
    return this.orderService.updateOrderById(this.id, this.order)
      .subscribe(
        (data: any) => window.location.reload(),
        error => console.warn(error)
      )
  }

  addProduct(product: Product) {
    if(this.orderItems.includes(product)) {
      this.items.forEach(function(item) {
        if(item.product_id == product.id) {
          ++item.qty
        }
      })
    } else {
      this.orderItems.push(product)
      this.items.push({
        product_id: product.id,
        qty: 1
      })
    }
  }

  removeProduct(index: number) {
    this.orderItems.splice(index, 1)
  }

}
