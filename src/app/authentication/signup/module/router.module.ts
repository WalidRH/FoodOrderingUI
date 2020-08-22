import { SignupComponent } from '../signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const router: Routes = [
  { path: '', component: SignupComponent }
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
export class SignupRouter { }
