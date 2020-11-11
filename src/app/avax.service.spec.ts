import { TestBed } from '@angular/core/testing';

import { AvaxService } from './avax.service';

describe('AvaxService', () => {
  let service: AvaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
