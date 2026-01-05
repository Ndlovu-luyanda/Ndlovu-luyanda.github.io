import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Footer} from './components/footer/footer';
import {Header} from './components/header/header';
import {Home} from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    Header,
    Footer,
    Home,
    About,
    Services,
    Portfolio,
    RouterModule,
     Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

}
