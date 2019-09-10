import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { OrderService } from "../order.service";
import { Order } from '../order';
import { Product } from '../../products/product';

@Component({
  selector: 'app-orders-show',
  templateUrl: './orders-show.component.html',
  styleUrls: ['./orders-show.component.css']
})
export class OrdersShowComponent implements OnInit {

  order: Order
  products = []
  id: number
  body: any

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.fetchData()
  }

  fetchData() {
    return this.orderService.getOrderById(this.id)
      .subscribe(
        (data: Order) => {
          this.order = data,
          this.products = data.products
        },
        error => console.warn(error)
      )
  }

  /**
   * Refactory beyond this line
   */

  updateOrder() {
    this.body = {
      user_id: this.order.user_id,
      status: this.order.status,
      products: this.formatOrderBody()
    }
    return this.orderService.updateOrderById(this.id, this.body)
      .subscribe(
        (data: any) => window.location.reload(),
        error => console.warn(error)
      )
  }

  formatOrderBody() {
    let orderProducts = []
    this.products.forEach(function(item) {
      orderProducts.push({
        product_id: item.id,
        qty: 1
      })
    })

    return orderProducts
  }

  removeProduct(index: number) {
    this.products.splice(index, 1)
  }

}
