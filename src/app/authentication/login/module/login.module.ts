import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouter } from './router.module';
import { LoginComponent } from '../login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouter,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
