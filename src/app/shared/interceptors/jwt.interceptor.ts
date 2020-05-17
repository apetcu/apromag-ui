import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { UserService } from '../../layout/user/services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getJwt()}`
      }
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const jwt = event.headers.get('Authorization');
          if (jwt) {
            this.userService.setJwt(jwt.replace('Bearer ', ''));
          }
        }
        return event;
      })
    );
  }
}
