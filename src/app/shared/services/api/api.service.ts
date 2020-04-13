import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/agromag-api/';

  constructor(private http: HttpClient) {}

  get(url: string, params = {}, options = {}): Observable<any> {
    return this.http.get(this.baseUrl + url, { params });
  }

  post(url: string, data: any, options = {}): Observable<any> {
    return this.http.post(this.baseUrl + url, data, options);
  }

  put(url: string, data: any, options = {}): Observable<any> {
    return this.http.put(this.baseUrl + url, data, options);
  }

  delete(url: string, options = {}): Observable<any> {
    return this.http.delete(this.baseUrl + url, options);
  }
}
