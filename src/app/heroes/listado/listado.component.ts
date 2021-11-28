import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  borrado: string = '';
  mostrar: boolean = false;

  borrarHeroe(){
    this.borrado = this.heroes.shift() || '' ;
    this.mostrar = this.borrado == '' ? false : true;
  }

}
