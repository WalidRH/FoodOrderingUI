import { SharedModule } from './../shared/shared.module';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouter } from './router.module';
import { OrdersListComponent } from './blocks/orders-list/orders-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartComponent, OrdersListComponent],
  imports: [
    CommonModule,
    CartRouter,
    SharedModule,
    FormsModule
  ]
})
export class CartModule { }
