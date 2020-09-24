import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisheContentComponent } from './components/dishe-content/dishe-content.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    DisheContentComponent,
    HeaderComponent,
    SpinnerComponent,
    ErrorComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisheContentComponent,
    HeaderComponent,
    SpinnerComponent,
    ErrorComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
