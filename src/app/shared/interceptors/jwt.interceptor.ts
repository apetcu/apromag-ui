import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { UserService } from '../../layout/user/services/user.service';
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public userService: UserService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getJwt()}`
      }
    });
    return next.handle(request);
  }
}