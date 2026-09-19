export type RouteHandler = () => HTMLElement;

export interface Route {
  path: string;
  component: RouteHandler;
}

export class Router {
  private routes: Map<string, RouteHandler> = new Map();
  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    window.addEventListener('popstate', () => this.handleRoute());
  }

  public addRoute(path: string, component: RouteHandler): void {
    this.routes.set(path, component);
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  private handleRoute(): void {
    const path = window.location.pathname;
    const component = this.routes.get(path) || this.routes.get('/') || this.notFoundComponent;

    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(component());
  }

  private notFoundComponent(): HTMLElement {
    const el = document.createElement('div');
    el.textContent = '404 - Page Not Found';
    return el;
  }
}
