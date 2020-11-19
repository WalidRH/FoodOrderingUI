import { OrderedItemDetailsComponent } from './blocks/ordered-item-details/ordered-item-details.component';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const router: Routes = [
  { path: '',
  component: OrdersComponent,
  children: [
    {path: 'details', component: OrderedItemDetailsComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRouter { }
