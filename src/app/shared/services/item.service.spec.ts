/* tslint:disable:no-unused-variable */
import { CovalentHttpModule } from '@covalent/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ItemService } from './item.service';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CovalentHttpModule.forRoot()],
      providers: [ItemService]
    });
  });

  it('should ...', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
