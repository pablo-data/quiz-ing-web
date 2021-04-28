import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Tareas , ListaTareas} from './../../interfaces/tareas';

@Component({
  selector: 'app-list-tasks-screen',
  templateUrl: './list-tasks-screen.component.html',
  styleUrls: ['./list-tasks-screen.component.scss']
})
export class ListTasksScreenComponent implements OnInit {

  tareas = ListaTareas;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.tareas = ListaTareas;
  }


  editarTask(tarea:Tareas){
    console.log(tarea.titulo);
    this.router.navigate(['/edit-task/', tarea.id]);
  }

  deleteTask(tarea: Tareas){
    console.log(tarea.id);
    let item = this.tareas.indexOf(tarea);
    this.tareas.splice(item, 1);
  }


}
