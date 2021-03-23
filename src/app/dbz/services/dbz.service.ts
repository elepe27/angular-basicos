import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    //arreglo privado del servicio el cual sera consumido en el personaje.component.ts con un get
    private _personajes : Personaje [] = [
        {
          nombre: 'Goku',
          poder:15000
        },
        {
          nombre: 'Vegeta',
          poder:7500
        },
        
      ];
    // get de la lista de arreglos de los personajes `Personaje[]`
    get personajes():Personaje[]{
        return [...this._personajes];
    }
 
    constructor(){}
    
    // metodo se crea despues del constructor para llevar el orden de nuestro codigo
    //lo que se debe hacer es crear el personaje y agregarlo al arreglo privado _personajes
    agregarPersonaje(personaje : Personaje){
        this._personajes.push(personaje);
    }
}
