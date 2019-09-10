import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { ProductService } from "../product.service";

import { Product } from '../product';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent implements OnInit {

  product: Product
  id: number
  productForm;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) {
    this.productForm = this.form.group({
      name: '',
      description: '',
      price: '',
      qty: ''
    })
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.fetchData()
  }

  fetchData() {
    return this.productService.getProductById(this.id)
      .subscribe(
        (data: Product) => {
          console.log(data)
          this.product = data
        },
        error => console.warn(error)
      )
  }

  updateData(body: Object = {}) {
    return this.productService.updateProductById(this.id, body)
      .subscribe(
        error => console.warn(error)
      )
  }

}
