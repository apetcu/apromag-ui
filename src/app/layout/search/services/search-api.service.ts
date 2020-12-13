import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  private domainUrl = 'products';
  constructor(private api: ApiService) {}

  getAll(query: string): Observable<any> {
    return this.api.get(this.domainUrl, { query });
  }
}
