import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ContactComponent } from '../contact.component';

const router = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRouter { }
