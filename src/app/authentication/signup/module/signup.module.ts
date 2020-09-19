import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRouter } from './router.module';
import { SignupComponent } from '../signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRouter,
    SharedModule,
    FormsModule
  ]
})
export class SignupModule { }
