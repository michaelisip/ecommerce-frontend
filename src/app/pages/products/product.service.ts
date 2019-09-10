import { Injectable } from '@angular/core';

import { ApiService } from "../../services/api.service";

import { endpoints } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private apiService: ApiService
  ) { }

  getProducts() {
    return this.apiService.getRequest(endpoints.products)
  }
}
