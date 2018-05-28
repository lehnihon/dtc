import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarComponent } from './pesquisar/pesquisar.component';

const routes: Routes = [
	{ path: 'pesquisar', component: PesquisarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
