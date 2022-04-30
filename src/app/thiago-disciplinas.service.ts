import { Injectable } from '@angular/core';

interface Materias{
  nome: string;
}

@Injectable()
export class ThiagoDisciplinasService {
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

}