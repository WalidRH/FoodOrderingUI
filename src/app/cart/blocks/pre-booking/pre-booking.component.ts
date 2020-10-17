import { SharedUtilsService } from './../../../shared/service/shared-utils.service';
import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Order } from './../../../shared/model/order.module';
import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { NotificationModule } from '../../../shared/model/notification.module';

@Component({
  selector: 'app-pre-booking',
  templateUrl: './pre-booking.component.html',
  styleUrls: ['./pre-booking.component.scss']
})
export class PreBookingComponent implements OnInit, AfterViewChecked {

  @Input() preBookingOrder: Order;
  preBooking = false;
  maxHour: number;
  constructor(private orderHttpService: OrderHttpRequestService, private utilService: SharedUtilsService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log('PRE-BOOKING ', this.preBooking);
    if ( this.preBooking ){
      this.setMaxHour();
     this.checkOpeningHours();
    }
  }

  setMaxHour(){
    this.maxHour = this.orderHttpService.CLOSING_HOUR - new Date().getHours();
    console.log('MAX HOUR', this.maxHour);

  }

  checkOpeningHours(): boolean{
    if (this.maxHour < 0 || new Date().getHours() < this.orderHttpService.OPENING_HOUR){
      this.utilService.notificationMessage.next(new NotificationModule('We are closed', 'FAILED'));
      setTimeout( () => {
        this.preBooking = false;
      }, 2000 );
      return false;
    }
    return true;
  }

}
