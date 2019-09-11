import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { ProductService } from "../../products/product.service";
import { OrderService } from "../order.service";

import { ApiReponse } from 'src/app/interfaces/api-reponse';
import { Product } from '../../products/product';
import { Order } from '../order';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.css']
})
export class OrdersCreateComponent implements OnInit {

  items = []
  products: Product[]
  order: Order
  body = {
    user_id: 1,
    status: 0,
    products: []
  }
  loading: boolean = false

  pagination: any = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router
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
          this.pagination.total_pages = data.last_page,
          this.pagination.total = data.total
          this.loading = false
        },
        error =>console.warn(error)
      )
  }

  addToOrder(product: Product) {
    if(this.items.includes(product)) {
      this.body.products.forEach(function(item) {
        if(item.product_id == product.id) {
          ++item.qty
        }
      })
    } else {
      this.items.push(product)
      this.body.products.push({
        product_id: product.id,
        qty: 1
      })
    }
  }

  removeProduct(index: number) {
    this.items.splice(index, 1)
  }

  storeOrder() {
    return this.orderService.addNewOrder(this.body)
      .subscribe(
        (data: Order) => {
          this.router.navigate(['orders'])
        },
        error => console.warn(error)
      )
  }

}
