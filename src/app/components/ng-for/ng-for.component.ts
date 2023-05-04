import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  teams =  [{
    nome: "Napoli",
    campionato: "Serie A"
  },
  {
    nome: "Bari",
    campionato: "Serie B"
  },
  {
    nome: "Roma",
    campionato: "Serie A"
  },
  {
    nome: "Milan",
    campionato: "Serie A"
  },
  {
    nome: "Brescia",
    campionato: "Serie B"
  }
];
}
