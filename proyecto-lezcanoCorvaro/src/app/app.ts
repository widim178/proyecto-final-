import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from './component/guitarra-nav/nav';
import { Footer } from './component/guitarra-footer/footer';
import { Guitarra } from './cuerdas/interface/interface';

@Component({
  imports: [RouterOutlet, Nav, Footer, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
