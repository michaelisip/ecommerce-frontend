import { Component, OnInit } from '@angular/core';

import { OrdersService } from "../../../services/orders.service";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ordersCount;
  productsCount;

  constructor(
    private orderService: OrdersService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getStatistics()
  }

  getStatistics() {
    this.orderService.getOrders()
      .subscribe(
        (data: any) => this.ordersCount = data.data.length
      )

    this.productService.getProducts()
      .subscribe(
        (data: any) => this.productsCount = data.data.length
      )
  }

}
