import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct()
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.getProduct(id)
      .subscribe(product => this.product = product)
  }

}
