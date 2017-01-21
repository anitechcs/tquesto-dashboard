/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToolboxService } from './toolbox.service';

describe('ToolboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolboxService]
    });
  });

  it('should ...', inject([ToolboxService], (service: ToolboxService) => {
    expect(service).toBeTruthy();
  }));
});
