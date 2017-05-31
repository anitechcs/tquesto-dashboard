import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './static/landing/landing.component';
import { TncComponent } from './static/tnc/tnc.component';
import { EventComponent } from './event/event.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PreferenceComponent } from './user/preference/preference.component';
import { HomeComponent } from './home/home.component';
import { MyappsComponent } from './home/myapps/myapps.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ConfigurationComponent } from './home/configuration/configuration.component';
import { IntegrationComponent } from './home/integration/integration.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EngagementComponent } from './engagement/engagement.component';
import { CompagionComponent } from './compagion/compagion.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { PerformanceComponent } from './performance/performance.component';

import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  {path: 'tnc', component: TncComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'configuration', component: ConfigurationComponent},
      {path: 'integration', component: IntegrationComponent},
      {path: 'myapps', component: MyappsComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'users', children: [
        {path: '', component: UserListComponent},
        {path: 'list', component: UserListComponent},
        {path: ':userName/edit', component: CreateUserComponent},
        {path: 'add', component: CreateUserComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'preference', component: PreferenceComponent},
      ]},
      {path: 'performance', children: [
        {path: '', component: PerformanceComponent}
      ]},
      {path: 'events', children: [
        {path: '', component: EventComponent}
      ]},
      {path: 'analytics', children: [
        {path: '', component: AnalyticsComponent}
      ]},
      {path: 'engagement', children: [
        {path: '', component: EngagementComponent}
      ]},
      {path: 'compagion', children: [
        {path: '', component: CompagionComponent}
      ]}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: false });
