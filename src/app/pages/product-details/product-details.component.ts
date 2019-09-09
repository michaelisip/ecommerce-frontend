import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { FormBuilder } from "@angular/forms";

import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id;
  product;
  productForm;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      qty: ''
    })
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.getProduct()
  }

  getProduct() {
    this.productService.getProduct(this.id)
      .subscribe(product => this.product = product)
  }

  onSubmit(updatedProduct) {
    this.productService.updateProduct(this.id, updatedProduct)
      .subscribe(
        error => console.warn(error)
      )
  }

}
