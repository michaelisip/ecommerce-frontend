import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from "@angular/forms";

import { ProductService } from "../../products/product.service";
import { UserService } from "../../users/user.service";
import { OrderService } from "../order.service";

import { ApiReponse } from 'src/app/interfaces/api-reponse';
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

  products: Product[] // existing products

  order: Order // order data
  orderItem: Product
  user: User
  orderItems = [] // order items

  productForm: FormGroup
  orderForm: FormGroup

  body = {
    user_id: 1,
    status: 0,
    products: []
  } //request body
  pagination: any = {
    page: 0,
    per_page: 0,
    total_pages: 0,
    total: 0
  } // pagination parameter

  searching = false
  searchFailed = false

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private userService: UserService,
    private router: Router,
    private form: FormBuilder,
  ) {
    this.productForm = form.group({
      product_id: [null],
      qty: [null]
    })
    this.orderForm = form.group({
      status: 0,
      user_id: [null, Validators.required],
      products: this.form.array([])
    })
  }

  ngOnInit() {
    this.onReload()
  }

  onReload() {
    this.fetchProducts(1)
  }

  orderFormGroup() {
    return this.form.group({
      status: 0,
      user_id: [null, Validators.required],
      products: this.form.array([])
    })
  }

  productFormGroup() {
    return this.form.group({
      product_id: [null],
      qty: [null]
    })
  }

  formatter = (x: { name: string }) => x.name

  setOrderUser(user: User) {
    this.orderForm.patchValue({
      user_id: user.id
    })
  }

  setOrderProduct(product: Product) {
    this.productForm.patchValue({
      product_id: product.id
    })
  }

  fetchProducts(page: number) {
    this.pagination.page = page
    return this.productService.getProducts(this.pagination)
      .subscribe(
        (data: ApiReponse) => {
          this.products = data.data,
            this.pagination.per_page = data.per_page,
            this.pagination.total_pages = data.last_page,
            this.pagination.total = data.total
        },
        error => console.warn(error)
      )
  }

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.products.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        term === '' ? []
          : this.userService.getUsersByName({ name: term }).pipe(
            tap(() => this.searchFailed = false),
            catchError(() => {
              this.searchFailed = true;
              return of([]);
            }))
      ),
      tap(() => this.searching = false)
    )

  addItemToOrder() {
    let controls = <FormArray>this.orderForm.controls.products
    controls.push(this.productForm)
    console.log(this.orderForm.value)
  }

  removeItemFromOrder(index: number) {
    this.orderForm.controls.products.value.splice(index, 1)
  }

  storeOrder() {

    this.orderForm.controls.products.value.forEach(element => {
      this.orderItems.push({
        product_id: element.product_id.id,
        qty: element.qty
      })
    });

    return this.orderService.addNewOrder({
      status: this.orderForm.controls.status.value,
      user_id: this.orderForm.controls.user_id.value.id,
      products: this.orderItems
    }).subscribe(
        (data: Order) => {
          this.router.navigate(['orders'])
        },
        error => console.warn(error)
      )
  }

}
