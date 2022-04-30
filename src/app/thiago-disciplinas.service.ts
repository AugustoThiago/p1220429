import { Injectable } from '@angular/core';

interface Materia{
  nome: string;
}

@Injectable()
export class ThiagoDisciplinasService {
  materias: Array<Materia> = [];

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

}