import { TestBed } from '@angular/core/testing';

import { AccidentesService } from './accidentes.service';

describe('AccidentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidentesService = TestBed.get(AccidentesService);
    expect(service).toBeTruthy();
  });
});
