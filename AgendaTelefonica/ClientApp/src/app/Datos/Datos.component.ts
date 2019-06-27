import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosService } from './Datos.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { Console } from '@angular/core/src/console';
 
@Component({
  templateUrl: './Datos.component.html'
})


export class DatosComponent {
  public datoList: Dato[];
  respuesta: any;
  message: any;
  constructor(public http: Http, private _router: Router, private datosService: DatosService) {
    this.getEmployees();
  }

  getEmployees() {
    this.datosService.getDirectorio().subscribe((tempdate) => { this.datoList = <Dato[]>tempdate; console.log(this.datoList)})
      , err => {
        
      } 
  }

  delete(iddato) {
    var ans = confirm("Do you want to delete customer with Id: " + iddato);
    if (ans) {
      this.datosService.deletedato(iddato).subscribe((data) => { this.respuesta = data;this.getEmployees(); }, error => console.error(error))
    }
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }  
}

interface Dato {
  IdDatos: number;
  Area: string;
  TelefonoLocal: string;
  Celular: string;
}  
