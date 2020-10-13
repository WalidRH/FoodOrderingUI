import { element } from 'protractor';
import { Router } from '@angular/router';
import { NotificationModule } from './../../../shared/model/notification.module';
import { SharedUtilsService } from './../../../shared/service/shared-utils.service';
import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Component, OnInit, ViewChild, OnChanges, ElementRef, Input } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  // array of orders to valdate
  @Input() orderItemsArray: Order[];
  @ViewChild('quantity') quantity: ElementRef;
  constructor( private orderHttpService: OrderHttpRequestService, private utilService: SharedUtilsService, private route: Router ) { }

  // get the list of orders to validate
  ngOnInit(): void {
    
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
