import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SupportComponent } from './pages/support/support.component';
import { AdmComponent } from './pages/adm/adm.component';
import { AdmPanelComponent } from './pages/adm-panel/adm-panel.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutComponent } from './pages/logout/logout.component';
import { AddProjetoComponent } from './pages/add-projeto/add-projeto.component';
import { AddBannerComponent } from './pages/add-banner/add-banner.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sobre",
    component: AboutusComponent
  },
  {
    path: "projetos",
    component: ProjectsComponent
  },
  {
    path: "contato",
    component: SupportComponent
  },
  {
    path: "adm",
    component: AdmComponent
  },
  {
    path: "adm-panel",
    component: AdmPanelComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "add-project",
    component: AddProjetoComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "add-banner",
    component: AddBannerComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
