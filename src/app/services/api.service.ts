import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest(url: string) {
    return this.http.get(url)
  }

  postRequest(url: string, payload: any) {
    return this.http.post(url, payload, httpOptions)
  }

  putRequest(url: string, payload: any) {
    return this.http.put(url, payload, httpOptions)
  }

  deleteRequest(url: string) {
    return this.http.delete(url)
  }

}
