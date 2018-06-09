import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsRoutingModule } from './lists-routing.module';
import { PagesModule } from '../pages.module';

import { ListsComponent } from './lists.component';
import { ListInsertComponent } from './list-insert/list-insert.component';
import { ListSearchComponent } from './list-search/list-search.component';

@NgModule({
  imports: [
    CommonModule,
    ListsRoutingModule,
    PagesModule
  ],
  declarations: [
    ListsComponent,
    ListInsertComponent,
    ListSearchComponent
  ]
})
export class ListsModule { }
