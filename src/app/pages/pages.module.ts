import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { SupportComponent } from './support/support.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdmComponent } from './adm/adm.component';
import { AdmPanelComponent } from './adm-panel/adm-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AddProjetoComponent } from './add-projeto/add-projeto.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddBannerComponent } from './add-banner/add-banner.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ProjectsComponent,
    SupportComponent,
    AdmComponent,
    AdmPanelComponent,
    LogoutComponent,
    AddProjetoComponent,
    AddBannerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
