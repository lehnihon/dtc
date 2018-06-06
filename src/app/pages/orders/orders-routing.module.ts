import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderImportComponent } from './order-import/order-import.component';
import { OrderInsertComponent } from './order-insert/order-insert.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'incluir', component: OrderInsertComponent },
  { path: 'importar', component: OrderImportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
