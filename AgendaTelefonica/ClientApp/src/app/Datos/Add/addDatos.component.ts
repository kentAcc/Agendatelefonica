import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  DatosService  } from  '../Datos.service';
import { Dato } from '../Dato';
@Component({
  templateUrl: './addDatos.component.html'
})  

export class AddDatos implements OnInit {
 
  addForm: FormGroup;  
  title: string = "Create";
  IdNombre: number;
  Nombre: any;
  Correo: any;
  //cityList: Array<any> = [];
  dato: Dato = new Dato();
  submitted = false;
  btnvisibility: boolean = true;  
  respuesta: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private datosService: DatosService, private _router: Router, private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {     
  }
  newEmployee(): void {
    this.submitted = false;
    this.dato = new Dato();
  }
 

  onSubmit() {
    this.datosService.createDato(this.dato).subscribe((tempdate) => { this.respuesta = tempdate; this._router.navigate(['Datos']); })
      , err => {
       
      } 
    
  }  

  cancel() {
    this._router.navigate(['Persona']);
  }
 /*
  get name() { return this.employeeForm.get('name'); }
  get gender() { return this.employeeForm.get('gender'); }
 get department() { return this.employeeForm.get('department'); }
  get city() { return this.employeeForm.get('city'); }
  */
}
