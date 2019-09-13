import { Injectable } from '@angular/core';

import { ApiService } from "../../services/api.service";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private api: ApiService
  ) { }

  getProducts(parameters: Object = {}) {
    return this.api.get('products', parameters)
  }

  getUsersByName(parameters: Object = {}) {
    return this.api.get('products/search', parameters)
  }

  getProductById(id: number) {
    return this.api.get(`products/${id}`)
      // .pipe(map(
      //   (res: any) => res.data
      // ))
  }

  addNewProduct(body: Object = {}) {
    return this.api.post('products', body)
  }

  updateProductById(id: number, body: Object = {}) {
    return this.api.put(`products/${id}`, body)
  }

  deleteProductById(id: number) {
    return this.api.delete(`products/${id}`)
  }

}
