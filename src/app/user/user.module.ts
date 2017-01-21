import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';

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

import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
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
    CovalentPagingModule,
    SharedModule,
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserListComponent,
    UserDetailComponent,
    CreateUserComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ]
})
export class UserModule { }
