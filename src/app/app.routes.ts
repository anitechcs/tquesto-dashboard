import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './static/landing/landing.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './home/myapps/myapps.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ConfigurationComponent } from './home/configuration/configuration.component';
import { IntegrationComponent } from './home/integration/integration.component';
import { AnalyticsComponent } from './event/analytics/analytics.component';
import { EngagementComponent } from './event/engagement/engagement.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'configuration', component: ConfigurationComponent},
    {path: 'integration', component: IntegrationComponent},
    {path: 'reports', component: ReportViewComponent},
    {path: 'myapps', component: MyappsComponent},
    {path: 'users', children: [
      {path: '', component: UserListComponent},
      {path: 'list', component: UserListComponent},
      {path: 'detail', component: UserDetailComponent},
      {path: 'create', component: CreateUserComponent},
    ]},
    {path: 'events', children: [
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'engagement', component: EngagementComponent}
    ]}
  ]}
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: false });
