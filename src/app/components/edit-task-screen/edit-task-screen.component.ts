import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import { Tareas , ListaTareas} from './../../interfaces/tareas';

import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-task-screen',
  templateUrl: './edit-task-screen.component.html',
  styleUrls: ['./edit-task-screen.component.scss']
})
export class EditTaskScreenComponent implements OnInit {

  estados = [
    {name: 'Iniciada'},
    {name: 'En proceso'},
    {name: 'Terminado'},
  ];

  tareas = ListaTareas;

  tarea: Tareas;
  id: number;

  formulario = new FormGroup({
    estado: new FormControl(this.estados[0]),
  });

  constructor(public form: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = 0;
    this.tarea = {id:this.id, titulo: '', estado: ''};
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros=>{
      this.id = parametros['id'];
    })

    //busco en la lista de tareas el elemento que tenga igual id y si no lo encuentra se le asigna un valor por defecto
    this.tarea = this.tareas.find(elemento => elemento.id == this.id) || {id:this.id, titulo: '', estado: ''};
    console.log(this.tarea.estado)

    //obtener la posicion del elemento que esta en el array estados y el que me trae el id
    let posicion_elemento = this.estados.findIndex(posicion => posicion.name == this.tarea.estado);

    this.formulario = this.form.group({
        titulo: [this.tarea.titulo, [Validators.required]],
        estado: [this.estados[posicion_elemento], [Validators.required]]
    });
  }

  validar(){
    //actualizo los cambios
    this.tarea = {
      id: this.tarea.id,
      titulo: this.formulario.value.titulo,
      estado: this.formulario.value.estado.name
    } 

    console.log(this.tarea);

    //primero busco el index del elemento
    let index = this.tareas.findIndex(elemento => elemento.id == this.tarea.id);
    //actualizo el array
    this.tareas[index] = this.tarea;

    //luego de validar, dirijo la pagina a lista de tareas
    this.router.navigate(['/list']);
  }

}
