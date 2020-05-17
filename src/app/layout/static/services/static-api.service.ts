import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StaticApiService {
  domainUrl: string = 'pages';
  constructor(private api: ApiService) {}

  getAll(): Observable<any> {
    return this.api.get(this.domainUrl);
  }

  getById(id: number): Observable<any> {
    return this.api.get(`${this.domainUrl}/${id}`);
  }
}
