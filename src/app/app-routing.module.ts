import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/module/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./menu/module/menu.module').then(m => m.MenuModule) },
  { path: 'contacts', loadChildren: () => import('./contact/module/contact.module').then(m => m.ContactModule) },
  { path: 'about', loadChildren: () => import('./about/module/about.module').then(m => m.AboutModule)},
  { path: 'login', loadChildren: () => import('./authentication/login/module/login.module').then(m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('./authentication/signup/module/signup.module').then(m => m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
