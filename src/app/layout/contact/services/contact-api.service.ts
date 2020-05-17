import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  domainUrl: string = 'contact';
  constructor(private api: ApiService) {}

  send(data): Observable<any> {
    return this.api.post(this.domainUrl, data);
  }
}
