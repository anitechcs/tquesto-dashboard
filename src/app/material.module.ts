import { NgModule, Type} from '@angular/core';
import { RequestInterceptor } from './shared/utils/request.interceptor';

import { MdCoreModule,
         MdButtonModule,
         MdCheckboxModule,
         MdCardModule,
         MdRadioModule,
         MdInputModule,
         MdSidenavModule,
         MdToolbarModule,
         MdListModule,
         MdGridListModule,
         MdIconModule,
         MdProgressSpinnerModule,
         MdProgressBarModule,
         MdTabsModule,
         MdSlideToggleModule,
         MdButtonToggleModule,
         MdSliderModule,
         MdMenuModule,
         MdTooltipModule,
         MdDialogModule,
         MdSnackBarModule,
         MdSelectModule,
         MdAutocompleteModule,
         MdChipsModule
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
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdButtonToggleModule,
    MdSliderModule,
    MdMenuModule,
    MdTooltipModule,
    MdDialogModule,
    MdSnackBarModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdChipsModule,
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
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdButtonToggleModule,
    MdSliderModule,
    MdMenuModule,
    MdTooltipModule,
    MdDialogModule,
    MdSnackBarModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdChipsModule,
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
