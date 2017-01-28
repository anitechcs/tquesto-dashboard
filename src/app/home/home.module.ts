import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { IntegrationComponent } from './integration/integration.component';
import { MyappsComponent } from './myapps/myapps.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    ConfigurationComponent,
    IntegrationComponent,
    MyappsComponent
  ],
  entryComponents: [ ]
})
export class HomeModule { }
