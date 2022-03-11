import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
     // Get the auth token from the service.
     const authToken = localStorage.getItem("token");
     const authReq = request.clone({
       headers: request.headers.set('Authorization','Bearer '+ authToken)
     });
    return next.handle(authReq);
  }
}
