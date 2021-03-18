import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string [] = ['SpiderMan','Iron Man','Hulk','Thor','Capitan America'];
  heroeEliminado: string  ='';
  


  borrarHeroe(){
   var heroeBorrado:string  = this.heroes.shift() || '';
   this.heroeEliminado = heroeBorrado;
  }
}
