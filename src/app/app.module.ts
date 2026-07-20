import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioValidacionesComponent } from './formulario-validaciones/formulario-validaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioValidacionesComponent,
    FormulariosReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioValidacionesComponent,
    FormulariosReactivosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
