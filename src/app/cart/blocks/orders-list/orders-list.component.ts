import { NotificationModule } from './../../../shared/model/notification.module';
import { SharedUtilsService } from './../../../shared/service/shared-utils.service';
import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orderItemsArray: Order[];
  constructor( private orderHttpService: OrderHttpRequestService, private utilService: SharedUtilsService ) { }

  ngOnInit(): void {
    this.orderHttpService.findOrderItemsToValidate();
    this.orderHttpService.ordersArraySubject.subscribe(
      response => {
        this.orderItemsArray = response;
        console.log('MY ORDERS LIST ', this.orderItemsArray);
      }
    );
    console.log('MY ORDERS LIST ', this.orderItemsArray);
  }

  remove(idOrder: string){
    console.log('DELETING ORDER ID : ' + idOrder );
    this.orderHttpService.deleteOrder(idOrder).subscribe(
      response => {
        this.utilService.notificationMessage.next(new NotificationModule(response.message, 'SUCCESS'));
        this.orderHttpService.findOrderItemsToValidate();
      },
      error => {
        this.utilService.notificationMessage.next(new NotificationModule(error.error.error, 'FAILED'));
      }
    );
  }

}
