import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Kalimantan = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Kalimantan</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauKalimantan = Pulau[2];
    const pulauContainer = document.querySelector('.card');
    pulauKalimantan.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Kalimantan;
