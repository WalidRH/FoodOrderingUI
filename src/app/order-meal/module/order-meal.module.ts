import { OrderMealRouterModule } from './router.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderMealComponent } from '../order-meal.component';
import { FormsModule } from '@angular/forms';
import { RelatedComponent } from '../blocks/related/related.component';

@NgModule({
  declarations: [ OrderMealComponent, RelatedComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OrderMealRouterModule,
    FormsModule
  ]
})
export class OrderMealModule { }
