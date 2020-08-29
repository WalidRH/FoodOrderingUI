import { IntroBlockComponent } from './blocks/intro-block/intro-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './router.module';
import { HomeComponent } from './home.component';
import { DescriptionBlockComponent } from './blocks/description-block/description-block.component';
import { StepsComponent } from './blocks/steps/steps.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroBlockComponent,
    DescriptionBlockComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ]
})
export class HomeModule { }