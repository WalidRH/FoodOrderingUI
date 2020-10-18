import { SharedModule } from './../../shared/shared.module';
import { MenuRouter } from './router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBlockComponent } from '../blocks/filter-block/filter-block.component';
import { MenuComponent } from '../menu.component';
import { ListDishesComponent } from '../blocks/list-dishes/list-dishes.component';
import { AddBlockComponent } from '../blocks/add-block/add-block.component';

@NgModule({
  declarations: [
    MenuComponent,
    FilterBlockComponent,
    ListDishesComponent,
    AddBlockComponent
  ],
  imports: [
    CommonModule,
    MenuRouter,
    SharedModule
  ]
})
export class MenuModule { }
