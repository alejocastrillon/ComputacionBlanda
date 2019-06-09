import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAccidenteComponent } from './registrar-accidente.component';

describe('RegistrarAccidenteComponent', () => {
  let component: RegistrarAccidenteComponent;
  let fixture: ComponentFixture<RegistrarAccidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAccidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
