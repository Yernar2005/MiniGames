import { Hero } from '@/components/hero/hero';
import { Component } from '../components/base-component';
import { Carrusel } from '@/components/carrusel/carrusel';
import { TopPlayers } from '@/components/table/table';
import { DeveloperCta } from '@/components/dev/dev';

export class HomePage extends Component {
  private hero: Hero;
  private carrusel: Carrusel;
  private topPlayer: TopPlayers;
  private developerCta: DeveloperCta;

  constructor() {
    super('main', 'home-page');
    this.hero = new Hero();
    this.carrusel = new Carrusel();
    this.topPlayer = new TopPlayers();
    this.developerCta = new DeveloperCta();
    this.init();
  }

  private init(): void {
    this.element.innerHTML = '';
    this.element.appendChild(this.hero.render());
    this.element.appendChild(this.carrusel.render());
    this.element.appendChild(this.topPlayer.render());
    this.element.appendChild(this.developerCta.render());
  }
}