import { NgModule, Component } from '@angular/core';
import { OrderMealComponent } from '../order-meal.component';
import { RouterModule } from '@angular/router';

const router = [
  { path: '', component: OrderMealComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderMealRouterModule { }
