import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { CardComponent } from './card/card.component';
import { MdlComponent } from './mdl/mdl.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    CardComponent,
    DashboardComponent,
    MdlComponent
  ],
  exports: [
    CardComponent,
    MdlComponent,
    FormsModule
  ]
})
export class PagesModule { }
