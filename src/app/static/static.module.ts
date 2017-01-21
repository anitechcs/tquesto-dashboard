import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TncComponent } from './tnc/tnc.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LandingComponent, TncComponent]
})
export class StaticModule { }
