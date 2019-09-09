import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../../../services/orders.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  orders;

  constructor(
    private orderService: OrdersService,
  ) { }

  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe((data: any) => {
        console.log(data)
        this.orders = data.data
      })
  }

}
