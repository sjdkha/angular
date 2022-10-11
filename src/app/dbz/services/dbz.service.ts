import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Veggeta',
      poder: 12500
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(personajeDb: Personaje){
    this._personajes.push(personajeDb);
  }

}