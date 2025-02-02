import { element } from 'protractor';
import { ContextManagerService } from './../context-manager.service';
import { SharedUtilsService } from './../shared-utils.service';
import { Subject } from 'rxjs';
import { HttpManagerModule } from './../../model/http-manager.module';
import { AuthenticationService } from './authentication.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../model/order.module';
import { stringify } from 'querystring';
import { NotificationModule } from '../../model/notification.module';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpRequestService {

  public PARAM_ORDER_ID = 'id';
  public PARAM_ORDER_STATUS = 'status';
  public PARAM_ORDER_DATE = 'orderDate';
  public PARAM_ORDER_CLIENT_EMAIL = 'emailClient';
  public STATUS_SUBMITTED = 'Submitted';
  public STATUS_VALID = 'Valid';
  public STATUS_PREPARED = 'OnPrepared';
  public STATUS_SERVED = 'OnServed';
  public CLOSING_HOUR = 22;
  public OPENING_HOUR = 1;
  ordersArraySubject = new Subject<Order[]>();
  
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private utilService: SharedUtilsService,
    private contextManagerService: ContextManagerService
    ) { }

  // make order
  setOrder(menuId: number, body: any){
    let queryParam = new HttpParams();
    let userEmail: string;
    userEmail = this.getAuthenticatedUserEmail();
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
      HttpManagerModule.httpHost + '/order/editOrder',
      orderData
    );
  }

  //find Order

  getOrder( serchParam: string, searchValue: any ){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('' + serchParam, '' + searchValue);
    return this.http.get<Order[]>(
      HttpManagerModule.httpHost + '/order/findOrder',
      {
        params: httpParams
      }
    );
  }

  // find pre-booked

  getPreBooked(reserveDate: string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('reserveDate', reserveDate);
    return this.http.get<Order[]>(
      HttpManagerModule.httpHost + '/order/PreBookingOrders',
      {
        params: httpParams
      }
    );
  }

  //find ordered menus

  getOrderedItems(){
    return this.http.get<Order[]>(
      HttpManagerModule.httpHost + '/order/OrderedMenus'
    );
  }

  // delete order

  deleteOrder(idOrder: string){
    let httpParams = new HttpParams();
    httpParams = httpParams.set('id', idOrder);
    return this.http.delete<any>(
      HttpManagerModule.httpHost + '/order/DeleteOrder',
      {
        params: httpParams
      }
    );
  }

  // HTTP request - find list of order to validate depending on authenticated user

  findOrderItemsToValidate(): void{
    let ordersArray: Order[] = [];
    this.getOrder(this.PARAM_ORDER_CLIENT_EMAIL, this.getAuthenticatedUserEmail()).subscribe(
      responseData => {
        console.log('RESPONSE DATA ', responseData);
        if ( !!responseData ){
          responseData.forEach(element => {
            if ( element.trackingStatus === this.STATUS_SUBMITTED ){
              this.contextManagerService.setImagePath(element.menu);
              console.log('Image Path', element.menu.image);
              ordersArray.push(element);
            }
          });
        }
        this.ordersArraySubject.next(ordersArray);
      },
      error => {
        this.authenticationService.logout();
        this.utilService.notificationMessage.next(new NotificationModule(error.error.message, NotificationModule.STATUS_FAILED));
      }
    );
  }

  private getAuthenticatedUserEmail(): string{
    let userEmail: string;
    this.authenticationService.authenticatedUser.subscribe(
      userData => {
        if ( !userData ){
          console.log('USER DATA empty ', userData);
          userEmail = null;
        }
        else{
          userEmail = userData.email;
        }
      }
    );
    return userEmail;
  }


}
