import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  PersonaService  } from  '../Persona.service';
import {  Persona} from '../Persona'
@Component({
  templateUrl: './addpersona.component.html'
})

export class Addpersona implements OnInit {
 
  addForm: FormGroup;  
  title: string = "Create";
  IdNombre: number;
  Nombre: any;
  Correo: any;
  //cityList: Array<any> = [];
  persona: Persona = new Persona();
  submitted = false;
  btnvisibility: boolean = true;  
  respuesta: any;
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private personaService: PersonaService, private _router: Router, private formBuilder: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {     
  }
  newEmployee(): void {
    this.submitted = false;
    this.persona = new Persona();
  }
 

  onSubmit() {
       this.personaService.createPersona(this.persona).subscribe((tempdate) => { this.respuesta = tempdate; this._router.navigate(['Persona']); })
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
