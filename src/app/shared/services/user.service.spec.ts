/* tslint:disable:no-unused-variable */
import { CovalentHttpModule } from '@covalent/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentHttpModule.forRoot()],
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
