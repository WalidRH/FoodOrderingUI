import { Order } from './../../../shared/model/order.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pre-booking',
  templateUrl: './pre-booking.component.html',
  styleUrls: ['./pre-booking.component.scss']
})
export class PreBookingComponent implements OnInit {

  @Input() preBookingOrder: Order;
  preBooking: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
