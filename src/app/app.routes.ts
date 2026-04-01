import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { SkillsComponent } from './component/skills/skills.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'skills', component:SkillsComponent}
    
];
