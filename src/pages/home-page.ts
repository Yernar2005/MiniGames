import { Component } from '../components/base-component';

export class HomePage extends Component {
  constructor() {
    super('main', 'home-page');
    this.init();
  }

  private init(): void {
    this.element.innerHTML = `
      <section class="hero">
        <h1>Welcome to MiniGames</h1>
      </section>
    `;
  }
}
