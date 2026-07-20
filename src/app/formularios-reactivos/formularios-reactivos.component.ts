import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})
export class FormulariosReactivosComponent {

  nombre = new FormControl('Ana');
  email = new FormControl('ana-perez@email.com');
}
