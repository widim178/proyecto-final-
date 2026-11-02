import { Component } from '@angular/core';
import { Guitarra } from '../../cuerdas/interface/interface';
import { GuitarraCard } from '../../component/guitarra-card/guitarra-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [GuitarraCard, RouterLink],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  guitarras: Guitarra[] = [
    {id: 1, nombre: 'ibanez jem', anio: 1987, precio: 1680000, imagen:"Ibanez JEM.jpg"},
    {id: 2, nombre: 'gibson les paul standard',anio: 1958, precio: 14000000, imagen:"Gibson Les Paul Standard.jpg"},
    {id: 3, nombre: 'fender stratocaster', anio: 1969, precio: 5958365, imagen:"public/Jim-Irsay-3@2000x1500-1068x801.png"},
    {id: 4, nombre: 'gibson sg', anio: 1961, precio: 19950000, imagen:"public/Gibson SG.jpg"},
    {id: 5, nombre: 'Red Special', anio: 1963, precio: 2599000,imagen:"public/Mi_guitarra8 (1).jpeg"},
    {id: 6, nombre: 'EVH striped series frankenstein relic', anio: 1978, precio: 9580000, imagen:"public/EVH striped series frankenstein relic.jpeg"}
  ];

onAgregar(g: Guitarra){
  alert(g.nombre + ' agregado al carrito');
}

}
