import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment as env } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  private readonly BASE_URL = env.API_BASE_URL

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error)
  }

  get(path: string, parameters: any = {}) : Observable<any> {
    return this.http.get(`${this.BASE_URL}/${path}`, { params: { ...parameters }})
      .pipe(catchError(this.formatErrors))
  }

  post(path: string, body: Object = {}) : Observable<any> {
    return this.http.post(`${this.BASE_URL}/${path}`, body, httpOptions)
      .pipe(catchError(this.formatErrors))
  }

  put(path: string, body: Object = {}) : Observable<any> {
    return this.http.put(`${this.BASE_URL}/${path}`, body)
      .pipe(catchError(this.formatErrors))
  }

  delete(path: string) : Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${path}`)
      .pipe(catchError(this.formatErrors))
  }

}
