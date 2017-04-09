import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullscreenDirective,
    NotificationsComponent,
    NotFoundComponent,
    ToolboxComponent,
    MessageComponent
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ToolboxComponent,
    MessageComponent,
    FullscreenDirective,
  ]
})
export class SharedModule { }
