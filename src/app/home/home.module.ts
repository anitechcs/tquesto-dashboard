import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/core';
import { CovalentFileModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/core';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDataTableModule } from '@covalent/core';
import { CovalentSearchModule } from '@covalent/core';
import { CovalentPagingModule } from '@covalent/core';

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
    RouterModule,
    CovalentCoreModule,
    CovalentChartsModule,
    CovalentChipsModule,
    CovalentDataTableModule,
    CovalentFileModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentJsonFormatterModule,
    CovalentMarkdownModule,
    CovalentSearchModule,
    CovalentPagingModule
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
