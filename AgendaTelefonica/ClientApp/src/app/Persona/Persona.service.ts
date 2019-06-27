import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Persona } from './Persona';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry} from 'rxjs/operators';
import { Observable } from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     
    
  })
};

@Injectable()
export class PersonaService {
  myAppUrl: string = "https://localhost:5001/";


  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string, private http: HttpClient) {
  /*  this.myAppUrl = baseUrl;*/

  }

  
  getPersonas() {

    return this.http.get(this.myAppUrl+ 'Persona/Index', httpOptions)
      .map(user => user);
      
  }

  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
      .subscribe(user => console.log(user))
      
  }    

  createPersona(persona: Persona): Observable<Persona> {
    console.log(persona);
    return this.http.post<Persona>(this.myAppUrl + 'Persona/Create', persona, httpOptions)
      .pipe( );
  }
   
  deletePersona(idNombre: number): Observable<{}> {
    console.log(this.myAppUrl);
    const url = this.myAppUrl + 'Persona/Delete/' + idNombre // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe();
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

   

}  
