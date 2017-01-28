import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EngagementComponent } from './engagement/engagement.component';
import { CompagionComponent } from './compagion/compagion.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AnalyticsComponent, 
    EngagementComponent, 
    CompagionComponent
  ]
})
export class EventModule { }
