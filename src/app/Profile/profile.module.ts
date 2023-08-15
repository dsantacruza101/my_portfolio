import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DrawerComponent } from './components/drawer/drawer.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,

  ]
})
export class ProfileModule { }
