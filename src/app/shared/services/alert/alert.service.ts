import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { from, Observable } from 'rxjs';
import { AlertMessage } from './alert-message.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  defaultOptions: AlertMessage = {
    title: '',
    text: '',
    showCancelButton: false
  };

  constructor() {}

  show(options: AlertMessage): Observable<any> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return from(Swal.fire({ ...this.defaultOptions, ...options }));
  }

  showSuccess(message: string) {
    this.show({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }

  showError(message: string, timer: number = 1500) {
    this.show({
      position: 'center',
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer
    });
  }
}
