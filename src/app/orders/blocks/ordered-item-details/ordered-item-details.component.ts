import { MenuData } from './../../../shared/model/MenuData.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/model/order.module';
import { OrderHttpRequestService } from '../../../shared/service/http-services/order-http-request.service';

@Component({
  selector: 'app-ordered-item-details',
  templateUrl: './ordered-item-details.component.html',
  styleUrls: ['./ordered-item-details.component.scss']
})
export class OrderedItemDetailsComponent implements OnInit {

  orderDetails: Order;
  nextStatus: string;

  constructor(private activeRoute: ActivatedRoute, private orderService: OrderHttpRequestService) { }

  ngOnInit(): void {

    console.log('URL queryData: ', this.activeRoute.queryParams);
    this.activeRoute.queryParams.subscribe(
      queryParam => {
        this.orderDetails = new Order(
          queryParam.ref,
          queryParam.quantity,
          queryParam.trackingStatus,
          queryParam.orderDate,
          queryParam.totalPrice,
          queryParam.serveDate,
          queryParam.nbPreson,
          JSON.parse(queryParam.client),
          JSON.parse(queryParam.menu)
        );
      }
    );
    switch (this.orderDetails.trackingStatus){
      case this.orderService.STATUS_VALID:
        this.nextStatus = this.orderService.STATUS_PREPARED; break;
      case this.orderService.STATUS_PREPARED:
        this.nextStatus = this.orderService.STATUS_SERVED; break;
    }

    console.log('ORDER DETAILS: ', this.orderDetails);
  }

  OnChangeStatus(){
    switch (this.orderDetails.trackingStatus){
      case this.orderService.STATUS_VALID:
        this.orderDetails.trackingStatus = this.orderService.STATUS_PREPARED; break;
      case this.orderService.STATUS_PREPARED:
        this.orderDetails.trackingStatus = this.orderService.STATUS_SERVED; break;
    }

    this.orderService.editOrder(this.orderDetails).subscribe(
      response => {
        console.log('STATUS CHANGED: ', response);
      },
      error => {
        console.log('ERROR CHANGING STATUS: ', error);
      }
    );
  }

}
