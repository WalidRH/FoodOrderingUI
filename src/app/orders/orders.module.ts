import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersRouter } from './router.module';



@NgModule({
  declarations: [ OrdersComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRouter
  ]
})
export class OrdersModule { }
