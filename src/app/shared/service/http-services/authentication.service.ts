import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/User.module';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpManagerModule } from '../../model/http-manager.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public ROLE_ADMIN = 'ADMIN';
  public ROLE_USER = 'USER';
  constructor( private http: HttpClient, private router: Router ) { }
  authenticatedUser = new BehaviorSubject<User>(null);

  login(email: string , password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.set('email', '' + email);
    queryParams = queryParams.append('password', '' + password);
    console.log('HTTP params ', queryParams);
    return this.http.get<User>(
      HttpManagerModule.httpHost + '/auth/login', {
        params : queryParams
      }
    ).pipe(
      tap(
        responseData => {
          console.log('RESPONSE DATA', responseData);
           this.authenticatedUser.next(responseData);
            localStorage.setItem('UserInfo', JSON.stringify(responseData));
        },
        error => {
          console.log('ERROR DATA ', error);
          if (error.name === 'ObjectUnsubscribedError'){
            console.log('ERROR ObjectUnsubscribedError');
            this.authenticatedUser.unsubscribe();
            this.login(email, password);
          }
        }
      )
    );
  }

  signup(user: User): any{
    console.log('USER ::> ', user);
    return this.http.post<User>(
      HttpManagerModule.httpHost + '/auth/signup',
      user
    );
  }

  logout(){
    localStorage.setItem('UserInfo', JSON.stringify(null));
    console.log('Unsubscribing.....');
    this.authenticatedUser.next(null);
    this.router.navigate(['/login']);
  }

  autoLogin(){
    console.log('AUTO LOGIN ');
    const user: User = JSON.parse(localStorage.getItem('UserInfo'));
    if ( !user ){
      return;
    }
    this.authenticatedUser.next(user);
  }

  checkTokenValidity(): Promise<boolean>{
    console.log('Check token validity');
    return new Promise<boolean>(
      (resolve, refuse) => {
       this.http.get<{String, boolean}>(
          HttpManagerModule.httpHost + '/auth/checkToken'
        ).subscribe(
          response => {
            console.log('Check token Response ', response);
            resolve(true);
          },
          error => {
            console.log('Check token Erro ', error);
           refuse(false);
          }
        );
      }
    );
  }

}
