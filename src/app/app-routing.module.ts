import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponentComponent } from './shared/error404-page-component/error404-page-component.component';

const router: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./Profile/profile.module').then( m => m.ProfileModule )
  },
  {
    path: '404',
    component: Error404PageComponentComponent
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
imports: [RouterModule.forRoot(router)],
exports: [RouterModule]
})
export class AppRoutingModule { }
