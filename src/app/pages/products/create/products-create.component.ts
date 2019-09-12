import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

import { ProductService } from "../product.service";
import { Product } from '../product';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  productForm: FormGroup

  constructor(
    private productService: ProductService,
    private form: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.productFormGroup()
  }

  ngOnInit() {
  }

  productFormGroup() : FormGroup {
    return this.form.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      qty: ['', Validators.required]
    })
  }

  storeData(body: Object = {})  {
    return this.productService.addNewProduct(body)
      .subscribe(
        (data: Product) => this.router.navigate(['products']),
        error => console.warn(error)
      )
  }

}
