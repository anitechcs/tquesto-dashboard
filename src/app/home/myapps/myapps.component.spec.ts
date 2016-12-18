/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyappsComponent } from './myapps.component';

describe('MyappsComponent', () => {
  let component: MyappsComponent;
  let fixture: ComponentFixture<MyappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
