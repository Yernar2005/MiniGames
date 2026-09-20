import { Hero } from '@/components/hero/hero';
import { Component } from '../components/base-component';
import { Carrusel } from '@/components/carrusel/carrusel';
import { TopPlayers } from '@/components/table/table';
import { DeveloperCta } from '@/components/dev/dev';
import { Footer } from '@/components/footer/footer';

export class HomePage extends Component {
  private hero: Hero;
  private carrusel: Carrusel;
  private topPlayer: TopPlayers;
  private developerCta: DeveloperCta;
  private footer: Footer;
  constructor() {
    super('main', 'home-page');
    this.hero = new Hero();
    this.carrusel = new Carrusel();
    this.topPlayer = new TopPlayers();
    this.developerCta = new DeveloperCta()
    this.footer = new Footer()
    this.init();
  }

  private init(): void {
    this.element.innerHTML = ``;

    this.element.appendChild(this.hero.render());
    this.element.appendChild(this.carrusel.render());
    this.element.appendChild(this.topPlayer.render());
    this.element.appendChild(this.developerCta.render())
    this.element.appendChild(this.footer.render())
  }
}
