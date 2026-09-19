export abstract class Component {
  protected element: HTMLElement;

  constructor(tagName: keyof HTMLElementTagNameMap = 'div', className: string = '') {
    this.element = document.createElement(tagName);
    if (className) {
      this.element.className = className;
    }
  }

  public render(): HTMLElement {
    return this.element;
  }
}