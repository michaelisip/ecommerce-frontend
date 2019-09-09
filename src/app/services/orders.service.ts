import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersEndpoint = 'http://localhost:8000/api/orders'

  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(this.ordersEndpoint)
            .subscribe(orders => console.log(orders))
  }
}
