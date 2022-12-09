import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/app';

const app = new App({
  tombolMenu: document.querySelector('.tombol-menu'),
  menu: document.querySelector('.list-menu'),
  content: document.querySelector('.layar-penuh'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
