import { NgModule, Type} from '@angular/core';
import { RequestInterceptor } from './shared/utils/request.interceptor';

import { MatButtonModule,
         MatCheckboxModule,
         MatCardModule,
         MatRadioModule,
         MatInputModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatGridListModule,
         MatIconModule,
         MatProgressSpinnerModule,
         MatProgressBarModule,
         MatTabsModule,
         MatSlideToggleModule,
         MatButtonToggleModule,
         MatSliderModule,
         MatMenuModule,
         MatTooltipModule,
         MatDialogModule,
         MatSnackBarModule,
         MatSelectModule,
         MatAutocompleteModule,
         MatChipsModule
       } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovalentHttpModule, IHttpInterceptor, HttpConfig} from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChipsModule,
         CovalentFileModule,
         CovalentJsonFormatterModule,
         CovalentDataTableModule,
         CovalentSearchModule,
         CovalentPagingModule,
         CovalentNotificationsModule,
         CovalentCommonModule,
         CovalentDialogsModule,
         CovalentExpansionPanelModule,
         CovalentLayoutModule,
         CovalentLoadingModule,
         CovalentMenuModule,
         CovalentMediaModule,
         CovalentMessageModule,
         CovalentStepsModule
        } from '@covalent/core';


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];


@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    FlexLayoutModule,
    NgxChartsModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**']
      }]
    }),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentChipsModule,
    CovalentFileModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentMessageModule,
    CovalentStepsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    FlexLayoutModule,
    NgxChartsModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentChipsModule,
    CovalentFileModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentMessageModule,
    CovalentStepsModule
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class MaterialModule { }
