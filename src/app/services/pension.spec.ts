import { TestBed } from '@angular/core/testing';

import { Pension } from './pension';

describe('Pension', () => {
  let service: Pension;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pension);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
