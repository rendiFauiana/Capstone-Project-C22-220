/* eslint-disable no-param-reassign */

const MenuInitiator = {
  init({ tombolMenu, menu }) {
    tombolMenu.addEventListener('click', (event) => {
      if (tombolMenu.ariaExpanded === 'false') {
        this._toggleDrawer(event, menu);
        tombolMenu.ariaExpanded = true;
      } else {
        this._closeDrawer(event, menu);
        tombolMenu.ariaExpanded = false;
      }
    });
  },

  _toggleDrawer(event, menu) {
    event.stopPropagation();
    menu.style.display = 'block';
  },

  _closeDrawer(event, menu) {
    event.stopPropagation();
    menu.classList.remove('open');
    menu.style.display = 'none';
  },
};

export default MenuInitiator;
