import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormularioSugerenciaComponent } from './dialog-formulario-sugerencia.component';

describe('DialogFormularioSugerenciaComponent', () => {
  let component: DialogFormularioSugerenciaComponent;
  let fixture: ComponentFixture<DialogFormularioSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormularioSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormularioSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
