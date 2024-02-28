import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos =[
    {
      conteudo: 'I love Money',
      autoria: 'Rodnei',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I love Money',
      autoria: 'Rodnei',
      modelo: 'modelo2'
    },
    {
      conteudo: 'I love Money',
      autoria: 'Rodnei',
      modelo: 'modelo3'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
