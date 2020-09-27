import { MyBasketRouterModule } from './router.module';
import { MyBasketComponent } from '../my-basket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ MyBasketComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MyBasketRouterModule
  ]
})
export class MyBasketModule { }
