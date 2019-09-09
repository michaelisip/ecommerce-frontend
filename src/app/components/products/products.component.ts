import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    public productService: ProductService,
    public orderService: OrdersService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    console.log(this.productService.getProducts())
    console.log(this.orderService.getOrders())
  }

}
