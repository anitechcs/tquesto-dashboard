import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';

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
    MaterialModule
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
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ToolboxComponent,
    MessageComponent,
    FullscreenDirective
  ]
})
export class SharedModule { }
