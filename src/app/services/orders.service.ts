import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { ordersEndpoint } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(ordersEndpoint)
  }

  getOrder(id: number) {
    return this.http.get(ordersEndpoint + `${id}`)
  }

  addOrder(payload: any) {
    return this.http.post(ordersEndpoint, payload, httpOptions)
  }

  updateOrder(id: number, payload: any) {
    return this.http.put(ordersEndpoint + `${id}`, payload, httpOptions)
  }

  deleteOrder(id: number) {
    return this.http.delete(ordersEndpoint + `${id}`)
  }

}
