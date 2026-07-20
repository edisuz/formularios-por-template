import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})
export class FormulariosReactivosComponent {

  nombre = new FormControl('Ana', [Validators.required]);
  email = new FormControl('ana-perez@email.com', [Validators.required, Validators.email]);
}
