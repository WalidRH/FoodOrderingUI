import { AuthenticationService } from './http-services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor{

  constructor( private authenticationService: AuthenticationService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.authenticatedUser.pipe(
      take(1),
      exhaustMap(
        authenticatedUser => {
          console.log('PASSING THROUGHT INTERCEPTOR');
          if (!authenticatedUser){
            return next.handle(req);
          }
          const modifiedRequest = req.clone({
            headers : new HttpHeaders({
              Authorization: 'Bearer ' + authenticatedUser.token
            })
          });
          return next.handle(modifiedRequest);
        }
      )
    );
  }

}
