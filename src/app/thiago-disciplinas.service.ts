import { Injectable } from '@angular/core';

interface Materias{
  title: string;
}

@Injectable()
export class ThiagoDisciplinasService {
  list: Array<Materias> = [];

  constructor() { }

  getMateria(){
    return this.list;
  }

  addMateria(title:string){
    this.list.push({title});
  }

  removeMateria(index:number){
    this.list.splice(index, 1)
  }

}