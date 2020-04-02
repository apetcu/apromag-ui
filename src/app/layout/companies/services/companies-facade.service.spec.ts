import { TestBed } from '@angular/core/testing';

import { CompaniesFacadeService } from './companies-facade.service';

describe('CompaniesFacadeService', () => {
  let service: CompaniesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
