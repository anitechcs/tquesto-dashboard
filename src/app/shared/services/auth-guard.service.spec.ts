/* tslint:disable:no-unused-variable */
import { AuthService } from './auth.service'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([], { useHash: false }), HttpModule],
      providers: [AuthGuardService, AuthService, {provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
