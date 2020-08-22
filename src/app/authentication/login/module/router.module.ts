
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../login.component';

const router: Routes = [
  { path: '', component: LoginComponent }
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
export class LoginRouter { }
