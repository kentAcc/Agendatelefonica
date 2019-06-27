import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Dato } from './Dato';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry} from 'rxjs/operators';
import { Observable } from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class DatosService {
  myAppUrl: string = "https://localhost:5001/";


  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string, private http: HttpClient) {
    /*this.myAppUrl = baseUrl; */}
   
 

  getDirectorio() {
    return this.http.get(this.myAppUrl + 'Dato/Index', httpOptions)
      .map(user => user);
  }

 



  createDato(dato: Dato): Observable<Dato> {
    console.log(dato);
    return this.http.post<Dato>(this.myAppUrl + 'Dato/Create', dato, httpOptions)
      .pipe( );
  }
   
  deletedato(idNombre: number): Observable<{}> {
    console.log(this.myAppUrl);
    const url = this.myAppUrl + 'Dato/Delete/' + idNombre // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe();
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

   

}  
