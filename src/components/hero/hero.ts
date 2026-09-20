import { Component } from '../base-component';
import heroTemplate from './hero.html?raw';
export class Hero extends Component {
  constructor() {
    super('section', 'hero');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = heroTemplate;
  }
}
