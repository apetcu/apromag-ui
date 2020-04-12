import { Injectable } from '@angular/core';
import { CartApiService } from './cart-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {

  constructor(private cartApiService: CartApiService) {}

}
