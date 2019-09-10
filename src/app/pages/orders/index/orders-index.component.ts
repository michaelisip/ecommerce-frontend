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
  loading: boolean = false

  pagination: any = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private orderService: OrderService
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
    return this.orderService.getOrders(this.pagination)
      .subscribe(
        (data: ApiReponse) => {
          this.orders = data.data,
          this.pagination.page = data.current_page,
          this.pagination.per_page = data.per_page,
          this.pagination.total_pages = data.last_page,
          this.pagination.total = data.total
          this.loading = false
        },
        error => console.warn(error)
      )
  }

  deleteOrder(id: number) {
    return this.orderService.deleteOrder(id)
      .subscribe(
        data => this.onReload(),
        error => console.warn(error)
      )
  }

}
