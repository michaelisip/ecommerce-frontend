import { Injectable } from '@angular/core';

import { ApiService } from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiService
  ) { }

  getUsers(paramaters: Object = {}) {
    return this.api.get('users', paramaters)
  }

  getUsersByName(paramaters: Object = {}) {
    return this.api.get('users/search', paramaters)
  }

  getUserById(id: number) {
    return this.api.get(`users/${id}`)
  }

  addNewUser(body: Object) {
    return this.api.post('users', body)
  }

  updateUserById(id: number, body: Object) {
    return this.api.put(`users/${id}`, body)
  }

  deleteUserById(id: number) {
    return this.api.delete(`users/${id}`)
  }

}
