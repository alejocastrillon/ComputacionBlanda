import { TestBed } from '@angular/core/testing';

import { RegistroVelocidadService } from './registro-velocidad.service';

describe('RegistroVelocidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroVelocidadService = TestBed.get(RegistroVelocidadService);
    expect(service).toBeTruthy();
  });
});
