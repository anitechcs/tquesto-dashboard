import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
