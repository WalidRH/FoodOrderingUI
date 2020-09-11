import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRouter } from './router.module';
import { ContactComponent } from '../contact.component';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouter,
    SharedModule
  ]
})
export class ContactModule { }
