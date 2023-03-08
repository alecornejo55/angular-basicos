import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
