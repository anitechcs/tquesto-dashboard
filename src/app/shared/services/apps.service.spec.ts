/* tslint:disable:no-unused-variable */
import { HttpModule } from '@angular/http'
import { TestBed, async, inject } from '@angular/core/testing';
import { AppsService } from './apps.service';

describe('AppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsService, HttpModule]
    });
  });

  it('should ...', inject([AppsService], (service: AppsService) => {
    expect(service).toBeTruthy();
  }));
});
