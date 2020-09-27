import { MyBasketComponent } from './../my-basket.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
const route = [
  {path: '', component: MyBasketComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class MyBasketRouterModule { }
