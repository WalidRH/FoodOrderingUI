import { HttpManagerModule } from './../../model/http-manager.module';
import { AuthenticationService } from './authentication.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../model/order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpRequestService {
  
  public static PARAM_ORDER_ID = 'id';
  public static PARAM_ORDER_STATUS = 'status';
  public static PARAM_ORDER_DATE = 'orderDate';
  public static PARAM_ORDER_CLIENT_EMAIL = 'emailClient';

  constructor( private http: HttpClient, private authenticationService: AuthenticationService ) { }

  // make order
  setOrder(menuId: number, body: any){
    let queryParam = new HttpParams();
    let userEmail: string;
    this.authenticationService.authenticatedUser.subscribe(
      userData => {
        console.log("USER DATA", userData);
        if ( !userData ){
          console.log('USER DATA empty ', userData);
        }
        else{
          userEmail = userData.email;
        }
      }
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

  editOrder( orderData: Order ){
    return this.http.put<Order>(
      HttpManagerModule + '/order/editOrder',
      orderData
    );
  }

  //find Order

  getOrder( serchParam: string, searchValue: any ){
    let httpParams = new HttpParams();
    httpParams.set('' + serchParam, '' + serchParam);
    return this.http.get<Order[]>(
      HttpManagerModule + '/order/findOrder',
      {
        params: httpParams
      }
    );
  }

  // find pre-booked

  getPreBooked(reserveDate: string){
    let httpParams = new HttpParams();
    httpParams.set('reserveDate', reserveDate);
    return this.http.get<Order[]>(
      HttpManagerModule + '/order/PreBookingOrders',
      {
        params: httpParams
      }
    );
  }

  //find ordered menus

  getOrderedItems(){
    return this.http.get<Order[]>(
      HttpManagerModule + '/order/OrderedMenus'
    );
  }

}
