import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisheContentComponent } from './components/dishe-content/dishe-content.component';



@NgModule({
  declarations: [DisheContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DisheContentComponent
  ]
})
export class SharedModule { }
