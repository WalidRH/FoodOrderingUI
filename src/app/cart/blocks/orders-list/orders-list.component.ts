import { element } from 'protractor';
import { Router } from '@angular/router';
import { NotificationModule } from './../../../shared/model/notification.module';
import { SharedUtilsService } from './../../../shared/service/shared-utils.service';
import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Component, OnInit, ViewChild, OnChanges, ElementRef } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnChanges {

  orderItemsArray: Order[];
  preBooking: boolean;
  @ViewChild('arrayOrdersForm') arrayOrdersForm: NgForm;
  @ViewChild('quantity') quantity: ElementRef;
  constructor( private orderHttpService: OrderHttpRequestService, private utilService: SharedUtilsService, private route: Router ) { }

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

  ngOnChanges(): void{
    console.log('WAL CHANGES ', this.arrayOrdersForm);
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

  onSubmit(){
    if ( this.orderItemsArray.length === 0 ){
      this.utilService.notificationMessage.next(new NotificationModule('Nothing to update: PLEASE ORDER SOME MEALS', 'FAILED'));
      this.route.navigate(['menu']);
    }else{
      console.log('ARRAY ORDER ',this.orderItemsArray);
      this.orderItemsArray.forEach(element => {
        console.log('CONSOLE : ', this.arrayOrdersForm.form.controls[element.quantity]);
        console.log('ELEMENT : ', element.quantity);
        if ( element.quantity !== this.arrayOrdersForm.form.controls[element.quantity].value){
            console.log('UPDATING ', element.ref);
        }
      });
    }

  }

}
