import { Component } from '@angular/core';
import { Guitarra } from '../../cuerdas/interface/interface';
import { GuitarraCard } from '../../component/guitarra-card/guitarra-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-productos2',
  styleUrl: './productos2.css',
  templateUrl: './productos2.html',
})
export class Productos2 {
  accesorios: Guitarra[] = [
    {id: 1, nombre: 'afinador digital', anio: 2016, precio: 27000, imagen:"/images.jpg"},
    {id: 2, nombre: 'capotraste flat clasica',anio: 2006, precio: 30000, imagen:"/913ac850-d02a-46e2-8ee2-617316b939d5-8849ad32d23.jpg"},
    {id: 3, nombre: 'puas personalizadas x30', anio: 2024, precio: 14000, imagen:"/pack30.webp"},
    {id: 4, nombre: 'cuerdas guitarra electrica ernie ball regular', anio: 1999, precio: 19950000, imagen:"/shopping.jpg"},
    {id: 5, nombre: 'ross g-10', anio: 2010, precio: 143000,imagen:"/49585_xlarge.jpg"},
    {id: 6, nombre: 'funda acolchada reforzada para guitarra eléctrica', anio: 2026, precio: 84000, imagen:"/95d2b353488222aa59937ae529bbfc61.jpg"}
  ];

  onAgregar(g: Guitarra){
  alert(g.nombre + ' agregado al carrito');
}
}
