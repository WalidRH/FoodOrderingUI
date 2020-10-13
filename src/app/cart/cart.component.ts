import { Order } from './../shared/model/order.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderHttpRequestService } from '../shared/service/http-services/order-http-request.service';
import { SharedUtilsService } from '../shared/service/shared-utils.service';
import { Router } from '@angular/router';
import { NotificationModule } from '../shared/model/notification.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  orderItemsArray: Order[];
  preBooking: Order;
  @ViewChild('arrayOrdersForm') arrayOrdersForm: NgForm;
  constructor(
    private orderHttpService: OrderHttpRequestService,
    private utilService: SharedUtilsService,
    private route: Router
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

  onSubmit() {
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
  }
}
