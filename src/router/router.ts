export type RouteHandler = () => HTMLElement;

export const ROUTE_CHANGE_EVENT = 'router:change';

export class Router {
  private routes: Map<string, RouteHandler> = new Map();
  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    window.addEventListener('popstate', () => this.handleRoute());
    this.initLinkInterceptor();
  }

  public addRoute(path: string, component: RouteHandler): void {
    this.routes.set(path, component);
  }

  public navigate(path: string): void {
    if (window.location.pathname === path) return;
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  public start(): void {
    this.handleRoute();
  }

  private handleRoute(): void {
    const path = window.location.pathname;
    const component = this.routes.get(path) || this.routes.get('/') || this.notFoundComponent;

    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(component());
    window.scrollTo(0, 0);

    document.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, { detail: path }));
  }

  private initLinkInterceptor(): void {
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      const isExternal = link.origin !== window.location.origin;
      const isNewTab = link.target === '_blank';
      const isModifiedClick = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

      if (isExternal || isNewTab || isModifiedClick || href.startsWith('#')) return;

      e.preventDefault();
      this.navigate(href);
    });
  }

  private notFoundComponent(): HTMLElement {
    const el = document.createElement('div');
    el.textContent = '404 - Page Not Found';
    return el;
  }
}
