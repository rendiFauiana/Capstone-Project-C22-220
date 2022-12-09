import MenuInitiator from '../utils/menu-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ tombolMenu, menu, content }) {
    this._tombolMenu = tombolMenu;
    this._menu = menu;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    MenuInitiator.init({
      tombolMenu: this._tombolMenu,
      menu: this._menu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
