import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentChipsModule } from '@covalent/chips';
import { CovalentFileModule } from '@covalent/file-upload';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/json-formatter';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentDataTableModule } from '@covalent/data-table';
import { CovalentSearchModule } from '@covalent/search';
import { CovalentPagingModule } from '@covalent/paging';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';
import { StaticModule } from './static/static.module';

import { AuthService } from './shared/services/auth.service';
import { SpinnerService } from './shared/services/spinner.service';

import { appRoutes, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentChipsModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentFileModule.forRoot(),
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule.forRoot(),
    CovalentJsonFormatterModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    appRoutes,
    UserModule,
    HomeModule,
    SharedModule,
    EventModule,
    ReportModule,
    StaticModule
  ],
  providers: [
    appRoutingProviders,
    Title,
    AuthService,
    SpinnerService
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
