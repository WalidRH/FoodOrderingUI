import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  DISPLAY_ORDERED_LIST = {
    submitted: 'SUBMIT',
    preReserved: 'PRES'
  };

  orderedListData: {
    orderedListType: string,
    OrderedListArray: Order[]
   } = {orderedListType: '', OrderedListArray: null};

  sectionToDisplay: string;

  constructor( private orderHttpService: OrderHttpRequestService ) { }

  ngOnInit(): void {
    this.showSubmittedOrders();
    this.sectionToDisplay = this.DISPLAY_ORDERED_LIST.submitted;
  }

  show( orderedListType: string ){
    if ( this.DISPLAY_ORDERED_LIST.submitted === orderedListType ){
      this.showSubmittedOrders();
    }else{
     this.showPreReservedOrders();
    }
    this.sectionToDisplay = orderedListType;
    console.log('DISPLAYED ORDERED DATA ', this.orderedListData);
  }

  showSubmittedOrders(){
    this.orderHttpService.getOrder(this.orderHttpService.PARAM_ORDER_STATUS, this.orderHttpService.STATUS_VALID).subscribe(
      response => {
        this.orderedListData.orderedListType = this.DISPLAY_ORDERED_LIST.submitted;
        this.orderedListData.OrderedListArray = response;
        this.orderedListData.OrderedListArray.forEach(
          (element, index) => {
            if ( !!element.nbPreson && !!element.serveDate ){
              this.orderedListData.OrderedListArray.splice(index, 1);
            }
          }
        );
      }
    );
  }

  showPreReservedOrders(){
    let todayDate = new Date().toISOString();
    let dateFormat = todayDate.replace(/T/gi, ' ');
    dateFormat = dateFormat.replace(/Z/gi, '');
    console.log('DATE TO SEND ----------', dateFormat);
    this.orderHttpService.getPreBooked(dateFormat).subscribe(
      response => {
        this.orderedListData.orderedListType = this.DISPLAY_ORDERED_LIST.preReserved;
        this.orderedListData.OrderedListArray = response;
        this.orderedListData.OrderedListArray.forEach(
          (element, index) => {
            if ( element.trackingStatus === this.orderHttpService.STATUS_SERVED ){
              this.orderedListData.OrderedListArray.splice(index, 1);
            }
          }
        );
      }
    );
  }
}
