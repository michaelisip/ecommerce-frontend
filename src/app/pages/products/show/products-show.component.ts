import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { FormBuilder } from "@angular/forms";

import { ProductService } from "../product.service";

import { Product } from '../product';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.css']
})
export class ProductsShowComponent implements OnInit {

  id: number
  productForm: FormGroup

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) {
    this.productForm = this.productFormGroup()
  }

  productFormGroup() {
    return this.form.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      qty: ['', Validators.required]
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
          this.productForm.patchValue({
            name: data.name,
            description: data.description,
            price: data.price,
            qty: data.qty
          })
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
