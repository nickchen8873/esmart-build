import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { St140tComponent } from './TXN/st140t/st140t.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './main/login/login.component';
import { AppComponent } from './app.component';
import { AccessGuard } from './shared/service/access.guard';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'st140t', component: St140tComponent },
  // { path: 'todolist', component: TodolistComponent },
  // { path: 'st140t', component: St140tComponent },
  {
    path: '',
    component: LoginComponent,
    canActivateChild: [AccessGuard],
    children: [
      // { path: 'login', component: LoginPageComponent },
      { path: 'todolist', component: TodolistComponent },
      // { path: 'st140t', component: St140tComponent },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
