import { Component, OnInit } from '@angular/core';

import { OrderService } from "../order.service";
import { ApiReponse } from 'src/app/interfaces/api-reponse';
import { Order } from '../order';

@Component({
  selector: 'app-orders-index',
  templateUrl: './orders-index.component.html',
  styleUrls: ['./orders-index.component.css']
})
export class OrdersIndexComponent implements OnInit {

  orders: Order;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe(
        (data: ApiReponse) => this.orders = data.data,
        error => console.warn(error)
      )
  }

}
