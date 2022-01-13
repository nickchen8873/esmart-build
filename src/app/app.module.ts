import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { St140tComponent } from './st140t/st140t.component';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { TopbarComponent } from './topbar/topbar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
// import { KernelTopService } from './kernel-top.service';

@NgModule({
  declarations: [
    AppComponent,
    St140tComponent,
    TodolistComponent,
    LoginComponent,
    TopbarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    TabViewModule,
    AutoCompleteModule,
    PanelMenuModule,
    // KernelTopService
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
