import { OrderHttpRequestService } from './../shared/service/http-services/order-http-request.service';
import { element } from 'protractor';
import { Order } from './../shared/model/order.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedUtilsService } from '../shared/service/shared-utils.service';
import { Router } from '@angular/router';
import { NotificationModule } from '../shared/model/notification.module';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  orderItemsArray: Order[];
  preBooking: Order;
  loading = false;
  @ViewChild('arrayOrdersForm') arrayOrdersForm: NgForm;
  constructor(
    private orderHttpService: OrderHttpRequestService,
    private utilService: SharedUtilsService,
    private route: Router,
    private datepipe: DatePipe
  ) {
    this.preBooking = new Order(0, 0, null, null, 0, null, null);
  }

  ngOnInit(): void {
    this.orderHttpService.findOrderItemsToValidate();
    this.orderHttpService.ordersArraySubject.subscribe((response) => {
      this.orderItemsArray = response;
      console.log('MY ORDERS LIST ', this.orderItemsArray);
    });
    console.log('MY ORDERS LIST ', this.orderItemsArray);
  }

  onSubmit(): void {
    console.log('SUBMITTING WAL ');
    if (this.orderItemsArray.length === 0) {
      this.utilService.notificationMessage.next(
        new NotificationModule(
          'Nothing to update: PLEASE ORDER SOME MEALS',
          'FAILED'
        )
      );
      this.route.navigate(['menu']);
    } else {
      console.log('ARRAY ORDER ', this.orderItemsArray);
      console.log('NBR Person ', this.preBooking.nbPreson);
      console.log('arriveDate ', this.preBooking.serveDate);
      console.log('FORM ', this.arrayOrdersForm);
    }
    this.loading = true;
    this.updateOrderItem(this.orderItemsArray, this.orderHttpService.STATUS_VALID);
  }

  updateOrderItem(arrayOrders: Order[], status: string): void {

    arrayOrders.forEach(orderItem => {
      this.setOrderItemProperties(orderItem, status);
      const isOrderValid = this.orderHttpService.editOrder(orderItem).subscribe(
        response => {
          this.loading = false;
          console.log('Updating order item ', orderItem);
          console.log('Order state updated ', response);
          this.utilService.notificationMessage.next(
            new NotificationModule(
              'Your Order has been valid',
              'SUCCESS'
            )
          );
          return !!response;
        }
      );

      if (isOrderValid){
        this.orderItemsArray.splice(0, this.orderItemsArray.length);
      }

    });
  }

  setOrderItemProperties( orderItem: Order, status: string ): void{
    if ( !!this.preBooking.nbPreson && !!this.preBooking.serveDate && !!this.orderItemsArray ){
        orderItem.nbPreson = this.preBooking.nbPreson;
        orderItem.serveDate = this.datepipe.transform(new Date().setHours(new Date().getHours() + +this.preBooking.serveDate), 'yyyy-MM-dd\'T\'HH:mm:ss');
        console.log('SERVE DATE ', orderItem.serveDate);

    }
    orderItem.trackingStatus = status;
  }


}
