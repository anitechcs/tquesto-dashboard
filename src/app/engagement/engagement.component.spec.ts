/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngagementComponent } from './engagement.component';

describe('EngagementComponent', () => {
  let component: EngagementComponent;
  let fixture: ComponentFixture<EngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
