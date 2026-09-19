import './styles/main.scss';
import { Router } from './router/router';
import { HomePage } from './pages/home-page';

const app = document.getElementById('app');

if (app) {
  const router = new Router(app);

  // Регистрация маршрутов
  router.addRoute('/', () => new HomePage().render());

  // Первоначальный рендер
  router.navigate(window.location.pathname);
}