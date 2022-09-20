import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {

  constructor(private notify: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http request started')
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        // console.log(error);
        this.notify.showSuccess();
        return throwError(error);
      })
    );
  }
}
