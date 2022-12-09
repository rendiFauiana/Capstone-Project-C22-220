import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Jawa = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Jawa</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauJawa = Pulau[1];
    const pulauContainer = document.querySelector('.card');
    pulauJawa.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Jawa;
