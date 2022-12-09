import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Balinusra = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Balinusra</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauBalinusra = Pulau[4];
    const pulauContainer = document.querySelector('.card');
    pulauBalinusra.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Balinusra;
