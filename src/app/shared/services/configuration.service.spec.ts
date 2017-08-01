/* tslint:disable:no-unused-variable */
import { CovalentHttpModule } from '@covalent/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentHttpModule.forRoot()],
      providers: [ConfigurationService]
    });
  });

  it('should ...', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
