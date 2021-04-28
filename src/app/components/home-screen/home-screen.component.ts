import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Tareas , ListaTareas} from './../../interfaces/tareas';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  estados = [
    {name: 'Iniciada'},
    {name: 'En proceso'},
    {name: 'Terminado'},
  ];

  tareas = ListaTareas;
  tarea: Tareas;


  formulario = new FormGroup({
    estado: new FormControl(this.estados[0]),
  });

  constructor(public form: FormBuilder, private router: Router) {
    this.formulario = this.form.group({
        titulo: ['', [Validators.required]],
        estado: ['', Validators.required]
    });

    this.tarea = {id:0, titulo: '', estado: ''};
   }

  ngOnInit(): void {
  }

  validar(){

    //obtengo el ultimo id ingresado
    let idUltimo = this.tareas[this.tareas.length - 1].id; 

    //guardar tarea en array
    this.tarea = {
      id: idUltimo + 1,
      titulo: this.formulario.value.titulo,
      estado: this.formulario.value.estado.name

    } 

    console.log(this.tarea);
    this.tareas.push(this.tarea);

    //luego de validar, dirijo la pagina a lista de tareas
    this.router.navigate(['/list']);
  }

  limpiar(){
    this.formulario = this.form.group({
      titulo: [''],
      estado: ['']
    });
  }

}
