import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-pipes',
  templateUrl: './directivas-pipes.component.html',
  styleUrls: ['./directivas-pipes.component.css']
})
export class DirectivasPipesComponent {
  activo = 0;
  alumnos = [
    { nombre: "pepito" },
    { nombre: "carlos" },
    { nombre: "jose" },
    { nombre: "rodrigo" },
  ];
  cursos = [
    { nombre: "DAW2", precio: 8000 },
    { nombre: "Base de datps", precio: 5000 },
    { nombre: "Desarrollo de aplicaciones moviles 2", precio: 10000 },
    { nombre: "angular", precio: 3000 },
  ];

  fechaActual = new Date();


  mostrarAlumnos(): void {
    this.activo = 0;
  }

  mostrarCursos(): void {
    this.activo = 1;
  }




}
