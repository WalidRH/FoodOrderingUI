import { OrderHttpRequestService } from './../../../shared/service/http-services/order-http-request.service';
import { Order } from './../../../shared/model/order.module';
import { Component, OnInit, Input, OnChanges, AfterViewChecked } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-pre-booking',
  templateUrl: './pre-booking.component.html',
  styleUrls: ['./pre-booking.component.scss']
})
export class PreBookingComponent implements OnInit, AfterViewChecked {

  @Input() preBookingOrder: Order;
  preBooking = false;
  maxHour: number;
  constructor(private orderHttpService: OrderHttpRequestService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log('PRE-BOOKING ', this.preBooking);
    if ( this.preBooking ){
      this.setMaxHour();
      if (this.maxHour < 0){
        setTimeout( function () {
          this.preBooking = false;
        }, 2000 );
      }
    }
  }

  setMaxHour(){
    this.maxHour = this.orderHttpService.CLOSING_HOUR - new Date().getHours();
    console.log('MAX HOUR', this.maxHour);
  }

}
