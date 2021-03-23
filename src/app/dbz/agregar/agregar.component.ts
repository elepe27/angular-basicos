import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  
  @Input() nuevo :Personaje={
    nombre:'',
    poder:0
  }


  // @Output() OnNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  //primero se debe instanciar el servicio de DbzService para poder utulizar el metodo agregarPersonaje()
  constructor (private _dbzService:DbzService){

  }

  agregar(){
    if(this.nuevo.nombre.trim().length===0){return;}

    console.log(this.nuevo);
    //this.OnNuevoPersonaje.emit(this.nuevo)
    //se inserta los datos en el arreglo Personaje[] que tiene el servicio
    this._dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }

}
