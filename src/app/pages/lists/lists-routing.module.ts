import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';
import { ListInsertComponent } from './list-insert/list-insert.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  { path: 'incluir', component: ListInsertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
