import { RoleGuardService } from './shared/service/role-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './shared/service/authentication-guard.service';
import { OrderMealModule } from './order-meal/module/order-meal.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'menu', loadChildren: () => import('./menu/module/menu.module').then(m => m.MenuModule) },
  { path: 'menu/add',
    loadChildren: () => import('./menu/edit-menu/module/menu-edit.module').then(m => m.EditMenuModule),
   canActivate: [RoleGuardService]
  },
  { path: 'contacts', loadChildren: () => import('./contact/module/contact.module').then(m => m.ContactModule) },
  { path: 'about', loadChildren: () => import('./about/module/about.module').then(m => m.AboutModule)},
  { path: 'login', loadChildren: () => import('./authentication/login/module/login.module').then(m => m.LoginModule)},
  { path: 'signup', loadChildren: () => import('./authentication/signup/module/signup.module').then(m => m.SignupModule)},
  { path: 'orders',
   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
   canActivate: [RoleGuardService]
  },
  { path: 'cart',
   loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
   canActivate: [AuthenticationGuardService]
  },
  { path: 'orderMeal',
   loadChildren: () => import('./order-meal/module/order-meal.module').then(m => m.OrderMealModule),
   canActivate: [AuthenticationGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
