import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  LoginModule,
  LoginRoutingModule,
  CadastroModule,
  CadastroRoutingModule,
  DashboardModule,
  DashboardRoutingModule,
  SharedModule

} from './modules'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    LoginRoutingModule,
    CadastroModule,
    CadastroRoutingModule,
    DashboardModule,
    DashboardRoutingModule,
    SharedModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
