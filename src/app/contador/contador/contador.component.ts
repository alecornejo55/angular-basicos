import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string;
  numero: number;
  base: number;
  constructor() {
    this.titulo = 'Contador App';
    this.numero = 10;
    this.base = 5;
  }

  acumular(valor: number) {
    this.numero += valor;
  }
}
