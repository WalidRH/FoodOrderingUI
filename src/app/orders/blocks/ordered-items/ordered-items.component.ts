import { ContextManagerService } from './../../../shared/service/context-manager.service';
import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../shared/model/order.module';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  DISPLAY_ORDERED_LIST = {
    submitted: 'SUBMIT',
    prepared: 'PREPARED',
    preReserved: 'PRES'
  };

  orderedListData: {
    orderedListType: string,
    OrderedListArray: Order[]
   } = {orderedListType: '', OrderedListArray: null};

   @Output() showOrderDetails = new EventEmitter<boolean>();
  sectionToDisplay: string;
  constructor( private orderHttpService: OrderHttpRequestService, private contextImageLoader: ContextManagerService ) { }

  ngOnInit(): void {
    this.showSubmittedOrders();
    this.sectionToDisplay = this.DISPLAY_ORDERED_LIST.submitted;
  }

  show( orderedListType: string ){
    if ( this.DISPLAY_ORDERED_LIST.submitted === orderedListType ){
      this.showSubmittedOrders();
    }else if ( this.DISPLAY_ORDERED_LIST.prepared === orderedListType ){
      this.showPreparedOrders();
    }else{
     this.showPreReservedOrders();
    }
    this.sectionToDisplay = orderedListType;
    console.log('DISPLAYED ORDERED DATA ', this.orderedListData);
  }

  showSubmittedOrders(){
    this.showOrdersByStatus(this.orderHttpService.STATUS_VALID);
  }

  showPreparedOrders(){
    this.showOrdersByStatus(this.orderHttpService.STATUS_PREPARED);
  }

  showOrdersByStatus(statusOrder: string){
    this.orderHttpService.getOrder(this.orderHttpService.PARAM_ORDER_STATUS, statusOrder).subscribe(
      response => {
        this.orderedListData.orderedListType = this.DISPLAY_ORDERED_LIST.submitted;
        this.orderedListData.OrderedListArray = response;
        this.orderedListData.OrderedListArray.forEach(
          (element, index) => {
            if ( !!element.nbPreson && !!element.serveDate ){
              this.orderedListData.OrderedListArray.splice(index, 1);
            }
            this.contextImageLoader.setImagePath(element.menu);
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

  onOrderDetailsDisplay(isOrderDetailsDisplayed: boolean){
    this.showOrderDetails.emit(isOrderDetailsDisplayed);
  }
}
