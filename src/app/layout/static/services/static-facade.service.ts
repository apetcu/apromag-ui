import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { StaticApiService } from './static-api.service';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { StaticPage } from '../models/static-page.model';

@Injectable({
  providedIn: 'root'
})
export class StaticFacadeService {
  constructor(private staticApiService: StaticApiService) {}

  getAll(): Observable<Array<StaticPage>> {
    return this.staticApiService.getAll().pipe(this.mapPagesToDomainModel());
  }

  getById(id: number): Observable<StaticPage> {
    return this.staticApiService.getById(id).pipe(map((response) => new StaticPage(response)));
  }

  private mapPagesToDomainModel(): OperatorFunction<any, Array<StaticPage>> {
    return map((response) => response.map((entry) => new StaticPage(entry)));
  }
}
