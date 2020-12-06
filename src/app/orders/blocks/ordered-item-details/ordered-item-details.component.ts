import { MenuData } from './../../../shared/model/MenuData.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-ordered-item-details',
  templateUrl: './ordered-item-details.component.html',
  styleUrls: ['./ordered-item-details.component.scss']
})
export class OrderedItemDetailsComponent implements OnInit {

  orderDetails: Order;

  constructor(private activeRoute: ActivatedRoute) { }

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

    console.log('ORDER DETAILS: ', this.orderDetails);
  }

}
