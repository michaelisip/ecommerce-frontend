import { Component, OnInit } from '@angular/core';

import { FormBuilder } from "@angular/forms";

import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  productForm;
  product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: '',
      qty: ''
    })
  }

  ngOnInit() {
  }

  onSubmit(productData) {
    return this.productService.addProduct(productData)
      .subscribe(
        product => this.product = product,
        error => console.warn(error))
  }

}
