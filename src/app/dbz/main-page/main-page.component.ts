import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent  {

  personajes : Personaje [] = [
    {
      nombre: 'Goku',
      poder:15000
    },
    {
      nombre: 'Vegeta',
      poder:7500
    },
    
  ] ;

  nuevo : Personaje ={
    nombre:'Maestro Roshi',
    poder:85
  }

  agregarNuevoPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }

  constructor(public dbzService:DbzService){

  }
}
