import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatosService } from '../Datos.service';
import { Dato } from '../Dato';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PersonaService } from '../../Persona/Persona.service';
import { Persona } from '../../Persona/Persona';
import { BehaviorSubject } from 'rxjs';
import { log } from 'util';
@Component({
  templateUrl: './addDatos.component.html',
  styleUrls: ['./addDatos.component.css']

})

export class AddDatos implements OnInit {
  myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<any>
  options: Persona[];
  myForm: FormControl;

  title: string = "Create";
  IdNombre: number;
  Nombre: any;
  Correo: any;
  //cityList: Array<any> = [];
  dato: Dato = new Dato();
  submitted = false;
  btnvisibility: boolean = true;
  respuesta: any;

  customerControl = new FormControl();
  matchingCustomers = new BehaviorSubject<any[]>([]);
  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private datosService: DatosService, private _router: Router, private formBuilder: FormBuilder, private router: Router, private personaService: PersonaService) {

  }

  /*ngOnInit(): void {



    this.myForm = new FormControl();
   /*this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
     map(val => { this.filter(val); console.log("aa")})
      ); 
    //this.filteredOptions = this.persona.getPersonas().pipe(startWith(''), map(value => this._filter(value)));
}*/

ngOnInit() {
  this.customerControl.valueChanges.subscribe(val => {
    if (val != null) {
      console.log(val);

      this.personaService.getPersonas(val).subscribe(customers => {

        this.matchingCustomers.next(customers);
        console.log(customers);

        // OR (depends on where you want do filtering [component|service|server]):

        // this.matchingCustomers.next(customers.filter(customer => {
        //   return customer.toLowerCase().indexOf(val.toLowerCase()) > -1;
        // }));

      });
    }
  });
}

  onSearchChange(searchValue: string) {
   
  
    this.personaService.getPersonas(searchValue).subscribe((tempdate) => { this.options = <Persona[]>tempdate }), err => { console.error(this.options) }
    console.log(this.options);



  }
  filter(val) {
   
    this.personaService.getPersonas(val).subscribe((tempdate) => {
      this.options = <Persona[]>tempdate;
     
      if (this.options) {
      
        this.options.filter(option => {  option.nombre.toLowerCase().includes(val.toLowerCase()) });

      }

    }), err => { console.error(this.options) }

    /*
    if (this.options) {
      return this.options.filter(option =>
        option.cat.toLowerCase().includes(val.toLowerCase()));
    }*/
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

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
  /*
   get name() { return this.employeeForm.get('name'); }
   get gender() { return this.employeeForm.get('gender'); }
  get department() { return this.employeeForm.get('department'); }
   get city() { return this.employeeForm.get('city'); }
   */
}
