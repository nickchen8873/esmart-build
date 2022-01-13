import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { St140tComponent } from './st140t/st140t.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'st140t', component: St140tComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
