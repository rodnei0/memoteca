import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CriarPensamentoComponent} from "./components/pensamentos/criar-pensamento/criar-pensamento.component";
import {ListarPensamentoComponent} from "./components/pensamentos/listar-pensamento/listar-pensamento.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: "full"
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
