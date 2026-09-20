import { Hero } from '@/components/hero/hero';
import { Component } from '../components/base-component';

export class HomePage extends Component {
  private hero: Hero
  constructor() {
    super('main', 'home-page');
    this.hero = new Hero()
    this.init();
  }

  private init(): void {
    this.element.innerHTML = ``;

    this.element.appendChild(this.hero.render())
  }
}
