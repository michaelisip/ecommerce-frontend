import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { OrdersService } from "../../../../services/orders.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.getOrder()
  }

  getOrder() {
    this.orderService.getOrder(this.id)
      .subscribe(
        data => this.order = data
      )
  }

  updateOrder(updatedOrder: any) {
    this.orderService.updateOrder(this.id, updatedOrder)
      .subscribe(
        error => console.warn(error)
      )
  }

}
