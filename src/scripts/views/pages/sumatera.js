import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Sumatera = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Sumatera</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauSumatera = Pulau[0];
    const pulauContainer = document.querySelector('.card');
    pulauSumatera.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Sumatera;
