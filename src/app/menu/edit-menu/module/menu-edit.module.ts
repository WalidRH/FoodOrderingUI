import { SharedModule } from './../../../shared/shared.module';
import { EditMenuRouter } from './router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMenuComponent } from '../edit-menu.component';

@NgModule({
  declarations: [
    EditMenuComponent
  ],
  imports: [
    CommonModule,
    EditMenuRouter,
    SharedModule
  ]
})
export class EditMenuModule { }
