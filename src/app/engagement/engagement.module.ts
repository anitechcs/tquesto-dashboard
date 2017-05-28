import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EngagementComponent } from './engagement.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EngagementComponent
  ]
})
export class EngagementModule { }
