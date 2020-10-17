import { SharedModule } from './../shared/shared.module';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CartRouter } from './router.module';
import { OrdersListComponent } from './blocks/orders-list/orders-list.component';
import { FormsModule } from '@angular/forms';
import { PreBookingComponent } from './blocks/pre-booking/pre-booking.component';


@NgModule({
  declarations: [CartComponent, OrdersListComponent, PreBookingComponent],
  imports: [
    CommonModule,
    CartRouter,
    SharedModule,
    FormsModule
  ],
  providers: [DatePipe]
})
export class CartModule { }
