import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EngagementComponent } from './engagement/engagement.component';
import { CompagionComponent } from './compagion/compagion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnalyticsComponent, 
    EngagementComponent, 
    CompagionComponent
  ]
})
export class EventModule { }
