import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { EventModule } from './event/event.module';
import { ReportModule } from './report/report.module';
import { StaticModule } from './static/static.module';

import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SpinnerService } from './shared/services/spinner.service';
import { ItemService } from './shared/services/item.service';
import { UserService } from './shared/services/user.service';
import { ToolboxService } from './shared/services/toolbox.service';
import { AppsService } from './shared/services/apps.service';
import { ConfigurationService } from './shared/services/configuration.service';

import { appRoutes, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    AuthGuardService,
    SpinnerService,
    ItemService,
    UserService,
    ToolboxService,
    AppsService,
    ConfigurationService
  ],
  entryComponents: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
