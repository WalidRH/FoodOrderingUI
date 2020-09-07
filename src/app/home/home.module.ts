import { SharedModule } from './../shared/shared.module';
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
import { EmailBlockComponent } from './email-block/email-block.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroBlockComponent,
    DescriptionBlockComponent,
    StepsComponent,
    AvantagesBlockComponent,
    PopularBlockComponent,
    ViewCategoriesComponent,
    EmailBlockComponent
  ],
  imports: [
    CommonModule,
    HomeRouter,
    SharedModule
  ]
})
export class HomeModule { }
