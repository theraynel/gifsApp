import { Component } from '@angular/core';
import { GifsService } from '../../gifs/sevices/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

 get historial(){
   return this.gifsServices.historial;
 }

  constructor(private gifsServices: GifsService){}

  buscar(termino: string){
     console.log(termino);

     this.gifsServices.buscar(termino);
     
  }
}
