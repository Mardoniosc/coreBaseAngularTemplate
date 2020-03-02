import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HomeComponent,
  DashboardComponent,
  PerfilUserComponent,
} from './components';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PerfilUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
