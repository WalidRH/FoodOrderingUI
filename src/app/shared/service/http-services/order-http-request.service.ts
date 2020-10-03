import { HttpManagerModule } from './../../model/http-manager.module';
import { AuthenticationService } from './authentication.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpRequestService {

  constructor( private http: HttpClient, private authenticationService: AuthenticationService ) { }

  // make order
  setOrder(menuId: number, body: any){
    let queryParam = new HttpParams();
    let userEmail: string;
    this.authenticationService.authenticatedUser.subscribe(
      userData => userEmail = userData.email
    );
    queryParam = queryParam.set('email', userEmail);
    queryParam = queryParam.append('idMenu', '' + menuId);
    console.log('query param', queryParam);
    return this.http.post<any>(
      HttpManagerModule.httpHost + '/order/makeOrder',
      body,
      {
        params: queryParam
      }
    );
  }

  //edit Order

  //find Order

  // find pre-booked

  //find ordered menus
}
