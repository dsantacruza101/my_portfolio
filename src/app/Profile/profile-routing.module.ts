import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

  const router: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        { path: 'home', component: HomePageComponent},
        { path: 'about', component: AboutPageComponent},
        { path: 'projects', component: ProjectsPageComponent},
        { path: 'skills', component: SkillsPageComponent},
        { path: 'contact', component: ContactPageComponent},
        { path: '**', redirectTo: 'home'},
      ]
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
