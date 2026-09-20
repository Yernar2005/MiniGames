import { Component } from '../base-component';
import devCtaTemplate from './dev.html?raw';

export class DeveloperCta extends Component {
  constructor() {
    super('section', 'dev-cta');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = devCtaTemplate;
  }
}
