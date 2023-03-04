import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../sevices/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtbuscar') txtbuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsServices: GifsService){}

  buscar(){

    const valor = this.txtbuscar.nativeElement.value;

    if (valor.trim().length === 0) return;

    this.gifsServices.buscar( valor );

    this.txtbuscar.nativeElement.value = '';
    
  }
}
