import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Sulawesi = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Sulawesi</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauSulawesi = Pulau[3];
    const pulauContainer = document.querySelector('.card');
    pulauSulawesi.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Sulawesi;
