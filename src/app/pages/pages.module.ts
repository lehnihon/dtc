import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    PagesComponent,
    CardComponent,
    DashboardComponent
  ],
  exports: [
    CardComponent,
    NgbModule,
    FormsModule
  ]
})
export class PagesModule { }
