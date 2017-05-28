import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PerformanceComponent } from './performance.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PerformanceComponent
  ]
})
export class PerformanceModule { }
