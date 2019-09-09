import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  ordersEndpoint = 'http://localhost:8000/api/orders'

  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(this.ordersEndpoint)
  }

  getOrder(id: number) {
    return this.http.get(this.ordersEndpoint + `${id}`)
  }

  addOrder(payload: any) {
    return this.http.post(this.ordersEndpoint, payload, httpOptions)
  }

  updateOrder(id: number, payload: any) {
    return this.http.put(this.ordersEndpoint + `${id}`, payload, httpOptions)
  }

  deleteOrder(id: number) {
    return this.http.delete(this.ordersEndpoint + `${id}`)
  }

}
