import { Injectable } from '@angular/core';

import { ApiService } from "../..//services/api.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private api: ApiService
  ) { }

  getOrders(parameters: Object = {}) {
    return this.api.get('orders', parameters)
  }

  getOrderById(id: number) {
    return this.api.get(`orders/${id}`)
  }

  addNewOrder(body: Object = {}) {
    return this.api.post('orders', body)
  }

  updateOrderById(id: number, body: Object = {}) {
    return this.api.put(`orders/${id}`, body)
  }

  deleteOrder(id: number) {
    return this.api.delete(`orders/${id}`)
  }

}
