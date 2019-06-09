import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVelocidadComponent } from './registro-velocidad.component';

describe('RegistroVelocidadComponent', () => {
  let component: RegistroVelocidadComponent;
  let fixture: ComponentFixture<RegistroVelocidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVelocidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVelocidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
