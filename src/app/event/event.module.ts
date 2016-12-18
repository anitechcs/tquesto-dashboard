import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EngagementComponent } from './engagement/engagement.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnalyticsComponent, 
    EngagementComponent
  ]
})
export class EventModule { }
