import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorhandlerInterceptor implements HttpInterceptor {
  constructor(private notify: NotificationService, private route: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const ErrorMessage = this.setError(error);
        this.notify.showError(ErrorMessage);
        return throwError(error);
      })
    );
  }

  setError(error: HttpErrorResponse) {
    let ErrorMessage = 'Sorry we are facing technical problems';

    if (error.error instanceof ErrorEvent) {
      //client side
      ErrorMessage = error.error.error;
    } else {
      //server side
      if (error.status != 0 && error.status != 404) {
        ErrorMessage = error.error.error;
      }else if(error.status === 0){
        this.route.navigate(['/nointernet'])
        return ErrorMessage = 'Check your Internet connection'
      }
    }
    return ErrorMessage;
  }
}
