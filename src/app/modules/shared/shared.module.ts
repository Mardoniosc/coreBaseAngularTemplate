import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


import {
  FooterComponent,
  HeaderComponent,
} from './components'



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
