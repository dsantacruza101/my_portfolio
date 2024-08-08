import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponentComponent } from './shared/error404-page-component/error404-page-component.component';
import { ProfileRoutingModule } from './Profile/profile-routing.module';

const router: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Error404PageComponentComponent
  }
]

@NgModule({
imports: [
  RouterModule.forRoot(router),
  ProfileRoutingModule
],
exports: [RouterModule]
})
export class AppRoutingModule { }
