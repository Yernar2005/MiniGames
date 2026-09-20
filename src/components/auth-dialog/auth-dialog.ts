import { Component } from '../base-component';
import authDialogTemplate from './auth-dialog.html?raw';
import { AUTH_DIALOG_OPEN_EVENT, type AuthDialogTab } from './auth-dialog-events';

export class AuthDialog extends Component {
  private backdrop: HTMLElement | null = null;
  private tabs: HTMLButtonElement[] = [];
  private contents: HTMLElement[] = [];
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
    super('div', 'auth-dialog');
    this.renderContent();
  }

  private renderContent(): void {
    this.element.innerHTML = authDialogTemplate;
    this.element.setAttribute('aria-hidden', 'true');
    this.queryElements();
    this.bindEvents();
  }

  private queryElements(): void {
    this.backdrop = this.element.querySelector('[data-auth-backdrop]');
    this.tabs = Array.from(this.element.querySelectorAll<HTMLButtonElement>('[data-auth-tab]'));
    this.contents = Array.from(this.element.querySelectorAll<HTMLElement>('[data-auth-content]'));
  }

  private bindEvents(): void {

    document.addEventListener(AUTH_DIALOG_OPEN_EVENT, this.handleOpenEvent as EventListener);
    document.addEventListener('keydown', this.handleKeydown);

    this.backdrop?.addEventListener('click', () => this.close());
    this.element.querySelector('[data-auth-close]')?.addEventListener('click', () => this.close());

    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => this.switchTab(tab.dataset.authTab as AuthDialogTab));
    });



    this.element.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', (e) => e.preventDefault());
    });

    this.element.querySelectorAll<HTMLButtonElement>('[data-toggle-password]').forEach((btn) => {
      btn.addEventListener('click', () => this.togglePasswordVisibility(btn));
    });
  }

  private handleOpenEvent = (e: Event): void => {
    const tab = (e as CustomEvent<AuthDialogTab>).detail;
    this.open(tab);
  };

  private handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.isOpen()) {
      this.close();
    }
  };

  private isOpen(): boolean {
    return this.element.classList.contains('auth-dialog--open');
  }

  public open(tab: AuthDialogTab = 'login'): void {
    this.switchTab(tab);
    this.lastFocusedElement = document.activeElement as HTMLElement;

    this.element.classList.add('auth-dialog--open');
    this.element.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');

    requestAnimationFrame(() => {
      const activeContent = this.contents.find(
        (content) => !content.classList.contains('auth-dialog__content--hidden')
      );
      activeContent?.querySelector<HTMLElement>('input')?.focus();
    });
  }

  public close(): void {
    this.element.classList.remove('auth-dialog--open');
    this.element.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    this.lastFocusedElement?.focus();
  }

  private switchTab(tab: AuthDialogTab): void {
    this.tabs.forEach((btn) => {
      const isActive = btn.dataset.authTab === tab;
      btn.classList.toggle('auth-dialog__tab--active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    this.contents.forEach((content) => {
      const isActive = content.dataset.authContent === tab;
      content.classList.toggle('auth-dialog__content--hidden', !isActive);
    });
  }

  private togglePasswordVisibility(button: HTMLButtonElement): void {
    const input = button.parentElement?.querySelector('input');
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}