import { IntroBlockComponent } from './blocks/intro-block/intro-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './router.module';



@NgModule({
  declarations: [
    IntroBlockComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ],
  exports: [
    IntroBlockComponent
  ]
})
export class HomeModule { }
