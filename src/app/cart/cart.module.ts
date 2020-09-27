import { SharedModule } from './../shared/shared.module';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouter } from './router.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRouter,
    SharedModule
  ]
})
export class CartModule { }
