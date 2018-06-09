import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { OrderInsertComponent } from './order-insert/order-insert.component';
import { OrderImportComponent } from './order-import/order-import.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    PagesModule
  ],
  declarations: [
    OrdersComponent,
    OrderSearchComponent,
    OrderInsertComponent,
    OrderImportComponent
  ]
})
export class OrdersModule { }
