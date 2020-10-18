import { EditMenuComponent } from './../edit-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
  { path: '', component: EditMenuComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class EditMenuRouter { }
