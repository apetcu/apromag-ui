import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          this.toasterService.error(err.message, 'Server error', {
            positionClass: 'toast-bottom-right',
            timeOut: 5000
          });
        }
        return of(err);
      })
    );
  }
}
