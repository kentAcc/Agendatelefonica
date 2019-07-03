import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
 
 
import { PersonaComponent } from './Persona/Persona.component';
import { HttpModule } from '@angular/http';
import { PersonaService } from './Persona/Persona.service';
import { DatosService } from './Datos/Datos.service'; 
import { Addpersona} from './Persona/Add/addpersona.component';
import { DatosComponent } from './Datos/Datos.component';
import { AddDatos } from './Datos/Add/addDatos.component';
  
 
 
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
 
    PersonaComponent,
    Addpersona,
    DatosComponent,
    AddDatos
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule ,
    HttpClientModule,
    FormsModule,
    FormsModule, ReactiveFormsModule, AutocompleteLibModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: PersonaComponent, pathMatch: 'full' },
      { path: 'Persona', component: PersonaComponent   }, 
      { path: 'Datos', component: DatosComponent },
      { path: 'AddPersona', component: Addpersona },
      { path: 'AddDatos', component: AddDatos },
    ])
  ],
  providers: [PersonaService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
