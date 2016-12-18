import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { CovalentCoreModule, TD_LOADING_ENTRY_COMPONENTS } from '@covalent/core';
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
    CovalentPagingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UserListComponent,
    UserDetailComponent,
    CreateUserComponent
  ]
})
export class UserModule { }
