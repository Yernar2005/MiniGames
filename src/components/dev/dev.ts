import { Component } from '../base-component';
import devCtaTemplate from './dev.html?raw';

export class DeveloperCta extends Component {
  constructor() {
    super('section', 'dev-cta');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = devCtaTemplate;
    this.setImageSrc();
  }

  private setImageSrc(): void {
    const base = import.meta.env.BASE_URL ?? '/';
    const img = this.element.querySelector<HTMLImageElement>('[data-image]');
    if (img) img.src = `${base}illustration-side.png`;
  }
}
