import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactApiService } from './contact-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFacadeService {
  constructor(private contactApiService: ContactApiService) {}

  sendMessage(data): Observable<any> {
    return this.contactApiService.send(data);
  }
}
