import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'logar', component: SignInComponent },
  { path: '', loadChildren: './pages/pages.module#PagesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
