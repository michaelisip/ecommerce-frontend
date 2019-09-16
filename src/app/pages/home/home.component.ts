import { Component, OnInit } from '@angular/core';

import { OrderService } from "../orders/order.service";
import { ProductService } from "../products/product.service";
import { UserService } from "../users/user.service";
import { ApiReponse } from 'src/app/interfaces/api-reponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsCount: number
  ordersCount: number
  usersCount: number

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getOrdersCount()
    this.getProductsCount()
    this.getUsersCount()
  }

  getOrdersCount() {
    return this.orderService.getOrders({page: 1})
      .subscribe(
        (data: ApiReponse) => {
          this.ordersCount = data.total
        }
      )
  }

  getProductsCount() {
    return this.productService.getProducts({page: 1})
      .subscribe(
        (data: ApiReponse) => {
          this.productsCount = data.total
          console.log(data)
        },
        error => console.warn(error)
      )
  }

  getUsersCount() {
    return this.userService.getUsers({page: 1})
      .subscribe(
        (data: ApiReponse) => {
          console.log(data)
          this.usersCount = data.total
        }
      )
  }

}
