import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainerProfileComponent } from './components/container-profile/container-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    ContainerProfileComponent,
    DashboardComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
