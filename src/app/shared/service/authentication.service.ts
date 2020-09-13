import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User.module';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http: HttpClient ) { }
  authenticatedUser = new BehaviorSubject<User>(null);
  login(email: string , password: string): any{
    let queryParams = new HttpParams();
    queryParams = queryParams.set('email', '' + email);
    queryParams = queryParams.append('password', '' + password);
    console.log('HTTP params ', queryParams);
    return this.http.get<User>(
      'http://localhost:8080/api/auth/login', {
        params : queryParams
      }
    ).pipe(
      tap(
        responseData => {
            this.authenticatedUser.next(responseData);
            localStorage.setItem('UserInfo', JSON.stringify(responseData));
        }
      )
    );
  }
}
