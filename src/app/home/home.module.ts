import { IntroBlockComponent } from './blocks/intro-block/intro-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './router.module';
import { HomeComponent } from './home.component';
import { DescriptionBlockComponent } from './blocks/description-block/description-block.component';
import { StepsComponent } from './blocks/steps/steps.component';
import { AvantagesBlockComponent } from './blocks/avantages-block/avantages-block.component';
import { PopularBlockComponent } from './blocks/popular-block/popular-block.component';
import { ViewCategoriesComponent } from './blocks/view-categories/view-categories.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroBlockComponent,
    DescriptionBlockComponent,
    StepsComponent,
    AvantagesBlockComponent,
    PopularBlockComponent,
    ViewCategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ]
})
export class HomeModule { }
