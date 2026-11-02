import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio'; 
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto'
import { Productos } from './pages/productos/productos';
import { Productos2 } from './pages/productos2/productos2';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path:'', component: Inicio},
    {path:'productos',component: Productos},
    {path: 'accesorios', component: Productos2},
    {path:'nosotros',component: Nosotros},
    {path:'contactos',component: Contacto},
    {path: '**', component: NotFound}
];
