import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

import { ProductService } from "../product.service";
import { Product } from '../product';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  productForm;

  constructor(
    private productService: ProductService,
    private form: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.form.group({
      name: '',
      description: '',
      price: '',
      qty: ''
    })
  }

  ngOnInit() {
  }

  storeData(body: Object = {})  {
    return this.productService.addNewProduct(body)
      .subscribe(
        (data: Product) => this.router.navigate(['products']),
        error => console.warn(error)
      )
  }

}
