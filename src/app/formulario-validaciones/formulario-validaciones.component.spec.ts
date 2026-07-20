import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioValidacionesComponent } from './formulario-validaciones.component';

describe('FormularioValidacionesComponent', () => {
  let component: FormularioValidacionesComponent;
  let fixture: ComponentFixture<FormularioValidacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioValidacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioValidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
