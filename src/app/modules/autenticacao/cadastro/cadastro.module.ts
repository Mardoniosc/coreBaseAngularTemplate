import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent, CadastrarComponent } from './components';
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    CadastrarComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CadastroModule { }
