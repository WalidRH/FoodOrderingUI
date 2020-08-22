import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/module/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./menu/module/menu.module').then(m => m.MenuModule) },
  { path: 'contacts', loadChildren: () => import('./contact/module/contact.module').then(m => m.ContactModule) },
  { path: 'about', loadChildren: () => import('./about/module/about.module').then(m => m.AboutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
