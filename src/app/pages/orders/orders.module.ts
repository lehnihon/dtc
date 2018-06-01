import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { CardHeaderComponent } from '../card-header/card-header.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule
  ],
  declarations: [
    OrdersComponent,
    OrderSearchComponent,
    CardHeaderComponent
  ]
})
export class OrdersModule { }
