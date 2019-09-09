import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../../services/orders.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  order;

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
  }

  addOrder(payload: any) {
    this.orderService.addOrder(payload)
      .subscribe(
        data => this.order = data,
        error => console.warn(error)
      )
  }

}
