import { Injectable } from '@angular/core';

import { ApiService } from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private api: ApiService
  ) { }

  register(body: Object = {}) {
    return this.api.post('register', body)
  }

  login(body: Object = {}) {
    return this.api.post('login', body)
  }

  logout() {
    return this.api.get('logout');
  }
}
