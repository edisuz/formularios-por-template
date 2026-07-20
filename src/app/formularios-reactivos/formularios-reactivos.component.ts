import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})
export class FormulariosReactivosComponent {

  // Forma de acceder al estado del formulario
  formUsuario = new FormGroup({
    'nombre': new FormControl('Ana', [Validators.required]),
    'email': new FormControl('ana-perez@email.com', [Validators.required, Validators.email])
  })
}
