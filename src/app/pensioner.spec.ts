import { TestBed } from '@angular/core/testing';

import { Pensioner } from './pensioner';

describe('Pensioner', () => {
  let service: Pensioner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pensioner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
