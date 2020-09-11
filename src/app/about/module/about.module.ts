import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoute } from './router.module';
import { AboutComponent } from '../about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoute,
    SharedModule
  ]
})
export class AboutModule { }
