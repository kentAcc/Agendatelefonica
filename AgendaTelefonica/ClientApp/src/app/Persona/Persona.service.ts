
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map,  catchError, retry} from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

import { Headers } from '@angular/http';

import { Persona } from './Persona';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
 





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
   
  private lastSearchQuery: string = '';
  private cachedCustomers: Persona[] = [];

  getPersonas(name: string): Observable<Persona[]> {
    if (name!= null)
    if (name.length > 0) { // developer defined value to prevent large responses
      // first search || 'name' is not part of 'lastSearchQuery'
      if (this.lastSearchQuery == ''
        || this.lastSearchQuery.toLowerCase().indexOf(name.toLowerCase()) === -1) {
        this.lastSearchQuery = name;

        return this.http.get<Persona[]>(this.myAppUrl +'api/Persona/Index?Nombre=' + name).pipe(map(customers => {
          this.cachedCustomers = customers;
          return customers;
        }));
      } else { return of(this.cachedCustomers); }
    } else { return of(this.cachedCustomers); }
  }
  getPersonasall(): Observable<Persona[]> {
     
        // developer defined value to prevent large responses
        // first search || 'name' is not part of 'lastSearchQuery'
        

    return this.http.get<Persona[]>(this.myAppUrl + 'api/Persona/Indexall/').pipe(map(customers => {
            this.cachedCustomers = customers;
            return customers;
          }));
       
       
  }

  getPersona1s(Nombre:string) {

    let params = new HttpParams().set("Nombre", Nombre); //Create new HttpParams
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
 
 

    /*    return this.http.get(this.myAppUrl + 'api/Persona/Index').pipe(
         map(user => user ));*/
    return this.http.get<Persona[]>(this.myAppUrl + 'api/Persona/Index?Nombre=' + Nombre)
    //return this._http.get(this.myAppUrl + 'api/Persona/Index/').pipe(map((response: any) => response.json()));
    // return this._http.get(this.myAppUrl + 'api/Persona/Index').pipe(map(user => { user; console.log(user)}));

  };
 
  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
      .subscribe(user => console.log(user))
      
  }    

  createPersona(persona: Persona): Observable<Persona> {
    console.log(persona);
    return this.http.post<Persona>(this.myAppUrl + 'api/Persona/Create', persona, httpOptions)
      .pipe( );
  }
   
  deletePersona(idNombre: number): Observable<{}> {
    console.log(this.myAppUrl);
    const url = this.myAppUrl + 'api/Persona/Delete/' + idNombre // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe();
  }

  errorHandler(error: Response) {
    console.log(error);
    return observableThrowError(error);
  }

   

}  
