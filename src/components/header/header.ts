import { Component } from '../base-component';
import headerTemplate from './header.html?raw';
import { openAuthDialog, type AuthDialogTab } from '../auth-dialog/auth-dialog-events';

export class Header extends Component {
  private mobileNav: HTMLElement | null = null;
  private burgers: NodeListOf<HTMLButtonElement> | null = null;
  private closeBtn: HTMLElement | null = null;

  constructor() {
    super('header', 'header');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = headerTemplate;
    this.setLogoSrc();
    this.bindEvents();
  }

  private setLogoSrc(): void {
    const base = import.meta.env.BASE_URL ?? '/';
    const logoPath = `${base}Brand_Logo.svg`;
    this.element.querySelectorAll<HTMLImageElement>('[data-logo]').forEach((img) => {
      img.src = logoPath;
    });
  }

  private bindEvents(): void {
    this.mobileNav = this.element.querySelector('[data-mobile-nav]');
    this.burgers = this.element.querySelectorAll('[data-burger]');
    this.closeBtn = this.element.querySelector('[data-mobile-nav-close]');

    this.burgers?.forEach((burger) => {
      burger.addEventListener('click', () => this.toggleMenu());
    });

    this.closeBtn?.addEventListener('click', () => this.closeMenu());

    this.mobileNav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => this.closeMenu());
    });

    this.element.querySelectorAll<HTMLButtonElement>('[data-auth-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => this.handleAuthTrigger(trigger));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });
  }

  private handleAuthTrigger(trigger: HTMLButtonElement): void {
    const tab = (trigger.dataset.authTrigger as AuthDialogTab) ?? 'login';

    if (this.mobileNav?.contains(trigger)) {
      this.closeMenu();
    }

    openAuthDialog(tab);
  }

  private toggleMenu(): void {
    const isOpen = this.mobileNav?.classList.contains('mobile-nav--open');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isOpen ? this.closeMenu() : this.openMenu();
  }

  private openMenu(): void {
    this.mobileNav?.classList.add('mobile-nav--open');
    this.burgers?.forEach((b) => {
      b.setAttribute('aria-expanded', 'true');
      b.classList.add('is-active');
    });
    document.body.classList.add('no-scroll');
  }

  private closeMenu(): void {
    this.mobileNav?.classList.remove('mobile-nav--open');
    this.burgers?.forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      b.classList.remove('is-active');
    });
    document.body.classList.remove('no-scroll');
  }
}
