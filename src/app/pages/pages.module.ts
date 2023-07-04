import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { SupportComponent } from './support/support.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ProjectsComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
