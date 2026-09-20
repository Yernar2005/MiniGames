import './styles/main.scss';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AuthDialog } from './components/auth-dialog/auth-dialog';
import { Router } from './router/router';
import { HomePage } from './pages/home-page';

class App {
  private header: Header;
  private footer: Footer;
  private authDialog: AuthDialog;
  private router: Router;
  private mainElement: HTMLElement;

  constructor() {
    const appRoot = document.getElementById('app');
    if (!appRoot) throw new Error('Root element #app not found');

    this.header = new Header();
    appRoot.appendChild(this.header.render());

    this.mainElement = document.createElement('main');
    this.mainElement.className = 'main-content';
    appRoot.appendChild(this.mainElement);

    this.footer = new Footer();
    appRoot.appendChild(this.footer.render());

    this.authDialog = new AuthDialog();
    document.body.appendChild(this.authDialog.render());

    this.router = new Router(this.mainElement);
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.addRoute('/', () => new HomePage().render());


    this.router.start(); 
  }
}

new App();