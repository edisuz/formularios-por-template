import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-validaciones',
  templateUrl: './formulario-validaciones.component.html',
  styleUrl: './formulario-validaciones.component.css'
})
export class FormularioValidacionesComponent implements OnInit {
  public persona = {
    nombre: '',
    edad: ''
  }

  procesar() {
    console.log(this.persona);
  }

  constructor() {

  }
  ngOnInit(): void {

  }
}
