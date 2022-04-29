import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThiagoComponent } from './thiago/thiago.component';
import { ThiagoDetalhesComponent } from './thiago-detalhes/thiago-detalhes.component';
import { ThiagoListaComponent } from './thiago-lista/thiago-lista.component';
import { ThiagoDisciplinasService } from './thiago-disciplinas.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: ThiagoComponent},
    {path:'thiago-detalhes', component: ThiagoDetalhesComponent},
    {path: 'thiago-lista', component: ThiagoListaComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThiagoComponent, ThiagoDetalhesComponent, ThiagoListaComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ ThiagoDisciplinasService]
})
export class AppModule { }
