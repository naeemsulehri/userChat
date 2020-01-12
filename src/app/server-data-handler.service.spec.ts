import { TestBed } from '@angular/core/testing';

import { ServerDataHandlerService } from './server-data-handler.service';

describe('ServerDataHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerDataHandlerService = TestBed.get(ServerDataHandlerService);
    expect(service).toBeTruthy();
  });
});
