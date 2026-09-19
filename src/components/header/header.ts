import { Component } from '../base-component';
import headerTemplate from './header.html?raw';

export class Header extends Component {
  constructor() {
    super('header', 'header');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = headerTemplate;
    this.bindEvents();
  }

  private bindEvents(): void {
    const loginBtn = this.element.querySelector('#auth-trigger-btn');
    loginBtn?.addEventListener('click', () => {});
  }
}
