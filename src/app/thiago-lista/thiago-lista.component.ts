import { Component, OnInit } from '@angular/core';
import  { ThiagoDisciplinasService } from '../thiago-disciplinas.service';

interface Materias{
  nome: string;
}

@Component({
  selector: 'app-thiago-lista',
  templateUrl: './thiago-lista.component.html',
  styleUrls: ['./thiago-lista.component.css']
})
export class ThiagoListaComponent implements OnInit {
  materias: Array<Materias> = [];
  
  constructor() { }

  getMateria(){
    return this.materias;
  }

  addMateria(nome:string){
    this.materias.push({nome});
  }

  removeMateria(index:number){
    this.materias.splice(index, 1)
  }

  ngOnInit() {
  }

}