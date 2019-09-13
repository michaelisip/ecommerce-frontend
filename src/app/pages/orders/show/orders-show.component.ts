import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { FormBuilder } from "@angular/forms";

import { OrderService } from "../order.service";
import { ProductService } from "../../products/product.service";
import { UserService } from "../../users/user.service";

import { Order } from '../order';
import { Product } from '../../products/product';
import { ApiReponse } from 'src/app/interfaces/api-reponse';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders-show',
  templateUrl: './orders-show.component.html',
  styleUrls: ['./orders-show.component.css']
})
export class OrdersShowComponent implements OnInit {

  orderItems = [] // with name
  items = []
  products = []
  id: number

  orderForm: FormGroup
  productForm: FormGroup
  productsFormArray: FormArray

  pagination = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  }

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private userService: UserService,
    private productService: ProductService,
    private form: FormBuilder,
    private router: Router
  ) {
    this.orderForm = this.orderFormGroup()
    this.productForm = this.productFormGroup()
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.fetchData()
  }

  orderFormGroup() {
    return this.form.group({
      user: [null],
      status: [null],
      products: this.form.array([])
    })
  }

  productFormGroup() {
    return this.form.group({
      product: [null],
      qty: [null]
    })
  }

  fetchData() {
    return this.orderService.getOrderById(this.id)
      .subscribe(
        (data: Order) => {
          this.orderForm = this.form.group({
            status: data.status,
            user: data.user,
            products: this.form.array(data.products)
          })
        },
        error => console.warn(error)
      )
  }

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        term === '' ? []
          : this.productService.getUsersByName({name: term}).pipe(
            catchError((error) => {
              console.warn(error)
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

  formatter = (x: { name: string }) => x.name

  addItemToOrder() {
    this.productsFormArray = this.orderForm.controls.products.value as FormArray;
    this.productsFormArray.push(this.productForm.value);
    console.log(this.productsFormArray.value)
    console.log(this.orderForm.value)
  }

  removeItemFromOrder(index: number) {
    this.orderForm.controls.products.value.splice(index, 1)
  }

  updateOrder() {
    this.orderForm.controls.products.value.forEach(element => {
      this.orderItems.push({
        product_id: element.product.id,
        qty: element.qty
      })
    })

    return this.orderService.updateOrderById(this.id, {
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
