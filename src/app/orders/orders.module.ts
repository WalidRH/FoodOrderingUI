import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersRouter } from './router.module';
import { OrderedItemsComponent } from './blocks/ordered-items/ordered-items.component';
import { OrderedItemDetailsComponent } from './blocks/ordered-item-details/ordered-item-details.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderedItemsComponent,
    OrderedItemDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRouter
  ]
})
export class OrdersModule { }
