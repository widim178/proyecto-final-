import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Guitarra } from '../../cuerdas/interface/interface';

@Component({
  imports: [],
  selector: 'app-guitarra-card',
  styleUrl: './guitarra-card.css',
  templateUrl: './guitarra-card.html',
})
export class GuitarraCard {

  @Input() guitarra!: Guitarra;

  @Output() agregarCarrito = new EventEmitter<Guitarra>();

  onAgregar(){
    this.agregarCarrito.emit(this.guitarra);
  }

}
