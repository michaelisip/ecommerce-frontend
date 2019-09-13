import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from "@angular/forms";

import { ProductService } from "../../products/product.service";
import { UserService } from "../../users/user.service";
import { OrderService } from "../order.service";

import { Product } from '../../products/product';
import { User } from "../../users/user";
import { Order } from '../order';
import { Observable, of } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-orders-create',
  templateUrl: './orders-create.component.html',
  styleUrls: ['./orders-create.component.css']
})
export class OrdersCreateComponent implements OnInit {

  orderItems = [] // order items

  orderForm: FormGroup
  productForm: FormGroup
  productsFormArray: FormArray

  pagination: any = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private userService: UserService,
    private router: Router,
    private form: FormBuilder,
  ) {
    this.orderForm = this.orderFormGroup()
    this.productForm = this.productFormGroup()
  }

  ngOnInit() {
  }

  orderFormGroup() {
    return this.form.group({
      status: 0,
      user: ['', Validators.required],
      products: this.form.array([])
    })
  }

  productFormGroup() {
    return this.form.group({
      product: [null],
      qty: [null]
    })
  }

  formatter = (x: { name: string }) => x.name

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        term === '' ? []
          : this.productService.getUsersByName({name: term}).pipe(
            catchError((error) => {
              console.log(error)
              return of([])
            })
          )
        ),
    )

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        term === '' ? []
          : this.userService.getUsersByName({ name: term }).pipe(
            catchError((error) => {
              console.warn(error)
              return of([]);
            }))
      ),
    )

  addItemToOrder() {
    this.productsFormArray = this.orderForm.controls.products.value as FormArray;
    this.productsFormArray.push(this.productForm.value);
  }

  removeItemFromOrder(index: number) {
    this.orderForm.controls.products.value.splice(index, 1)
  }

  storeOrder() {

    this.orderForm.controls.products.value.forEach(element => {
      this.orderItems.push({
        product_id: element.product.id,
        qty: element.qty
      })
    });

    return this.orderService.addNewOrder({
      status: this.orderForm.controls.status.value,
      user_id: this.orderForm.controls.user.value.id,
      products: this.orderItems
    }).subscribe(
        (data: Order) => {
          this.router.navigate(['orders'])
          this.orderItems = []
        },
        error => console.warn(error)
      )
  }

}
