/* tslint:disable:no-unused-variable */
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppModule } from '../../app.module';
import { IntegrationComponent } from './integration.component';

describe('IntegrationComponent', () => {
  let component: IntegrationComponent;
  let fixture: ComponentFixture<IntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
