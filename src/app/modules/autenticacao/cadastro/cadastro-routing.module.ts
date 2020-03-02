import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CadastrarComponent, CadastroComponent } from './components'


export const cadastroRoutes: Routes = [
  {
    path: 'login/cadastro',
    component: CadastrarComponent,
    children:[
      { path: '', component: CadastroComponent }
    ]
  }
]


@NgModule({
  imports: [ RouterModule.forChild(cadastroRoutes) ],
  exports: [ RouterModule ]
})

export class CadastroRoutingModule {
}
