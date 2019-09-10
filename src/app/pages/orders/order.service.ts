import { Injectable } from '@angular/core';

import { ApiService } from "../..//services/api.service";
import { endpoints } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private apiService: ApiService
  ) { }

  getOrders() {
    return this.apiService.getRequest(endpoints.orders)
  }

}
