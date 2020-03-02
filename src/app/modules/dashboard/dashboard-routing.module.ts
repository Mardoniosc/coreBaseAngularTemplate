import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  DashboardComponent,
  HomeComponent,
  PerfilUserComponent,
} from './components'


export const dashboardRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      { path: '', component: DashboardComponent },
      { path: 'perfil', component: PerfilUserComponent }
    ]
  }
]


@NgModule({
  imports: [ RouterModule.forChild(dashboardRoutes) ],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {
}
