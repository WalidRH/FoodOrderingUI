import { SharedModule } from './../../../shared/shared.module';
import { EditMenuRouter } from './router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditMenuComponent } from '../edit-menu.component';
import { ListNewMenuComponent } from '../blocks/list-new-menu/list-new-menu.component';
import { AddMenuComponent } from '../blocks/add-menu/add-menu.component';

@NgModule({
  declarations: [
    EditMenuComponent,
    ListNewMenuComponent,
    AddMenuComponent
  ],
  imports: [
    CommonModule,
    EditMenuRouter,
    SharedModule
  ]
})
export class EditMenuModule { }
