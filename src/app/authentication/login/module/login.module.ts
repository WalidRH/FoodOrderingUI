import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouter } from './router.module';
import { LoginComponent } from '../login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouter,
    SharedModule
  ]
})
export class LoginModule { }
