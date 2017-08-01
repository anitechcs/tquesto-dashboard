/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from '../../app.module';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
