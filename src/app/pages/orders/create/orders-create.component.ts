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
  body: any
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
    this.items.push(product)
  }

  removeProduct(index: number) {
    this.items.splice(index, 1)
  }

  /**
   * Refactory beyond this line
   */

  storeOrder() {
    this.body = {
      user_id: 2,
      status: 1,
      products: this.formatOrderBody()
    }
    return this.orderService.addNewOrder(this.body)
      .subscribe(
        (data: Order) => {
          console.log(data),
          this.router.navigate(['orders'])
        },
        error => console.warn(error)
      )


  }

  formatOrderBody() {
    let orderProducts = []
    this.items.forEach(function(item) {
      orderProducts.push({
        product_id: item.id,
        qty: 1
      })
    })

    return orderProducts
  }

}
