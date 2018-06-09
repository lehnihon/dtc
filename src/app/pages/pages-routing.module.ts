import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    { path: '', component: PagesComponent, children: [
      { path: 'painel', component: DashboardComponent },
      { path: 'encomendas', loadChildren: './orders/orders.module#OrdersModule' },
      { path: 'listas', loadChildren: './lists/lists.module#ListsModule' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
