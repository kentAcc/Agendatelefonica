
import {throwError as observableThrowError,  Observable ,  Subscription } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from './Persona.service';
import { Persona} from './Persona';
@Component({
  templateUrl: './Persona.component.html'
})


export class PersonaComponent {
  public empList: Persona[] ;
  respuesta: any;
  message: any;
  constructor(public http: Http, private _router: Router, private personaService: PersonaService) {
    this.getEmployees();
  }

  getEmployees() {
    this.personaService.getPersonasall().subscribe((tempdate) => { this.empList = <Persona[]>tempdate; console.log(this.empList) }), err => { console.error(this.empList)}
    //this.personaService.getPersonas().subscribe(res =>  res);
  }

  delete(idNombre) {
    var ans = confirm("Do you want to delete customer with Id: " + idNombre);
    if (ans) {
      this.personaService.deletePersona(idNombre).subscribe((data) => { this.respuesta = data; this.getEmployees();}, error => console.error(error))
    }
  }

  errorHandler(error: Response) {
    console.log(error);
    return observableThrowError(error);
  }  
}

 
