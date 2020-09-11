import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisheContentComponent } from './components/dishe-content/dishe-content.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [DisheContentComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DisheContentComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
