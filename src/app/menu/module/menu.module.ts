import { MenuRouter } from './router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBlockComponent } from '../blocks/filter-block/filter-block.component';
import { MenuComponent } from '../menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    FilterBlockComponent
  ],
  imports: [
    CommonModule,
    MenuRouter
  ]
})
export class MenuModule { }
