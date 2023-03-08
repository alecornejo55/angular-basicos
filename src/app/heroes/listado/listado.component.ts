import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[];
  heroeBorrado: string;
  constructor() {
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
    this.heroeBorrado = '';
  }
  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
