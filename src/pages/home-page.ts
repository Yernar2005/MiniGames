import { Hero } from '@/components/hero/hero';
import { Component } from '../components/base-component';
import { Carrusel } from '@/components/carrusel/carrusel';

export class HomePage extends Component {
  private hero: Hero;
  private carrusel: Carrusel;
  constructor() {
    super('main', 'home-page');
    this.hero = new Hero()
    this.carrusel = new Carrusel()
    this.init();
  }

  private init(): void {
    this.element.innerHTML = ``;

    this.element.appendChild(this.hero.render())
    this.element.appendChild(this.carrusel.render())
  }
}
