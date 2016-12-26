/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompagionComponent } from './compagion.component';

describe('CompagionComponent', () => {
  let component: CompagionComponent;
  let fixture: ComponentFixture<CompagionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompagionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
