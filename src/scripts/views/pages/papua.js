import Pulau from '../../data/Pulau';
import { createBaju } from '../templates/tempaltes-pages';

const Papua = {
  async render() {
    return `
        <div class="container">
            <div class="row">
                <h3 class="style-h3">Baju Adat Di Pulau Papua</h3>
                <div class="card"></div>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const pulauPapua = Pulau[5];
    const pulauContainer = document.querySelector('.card');
    pulauPapua.baju.forEach((baju) => {
      pulauContainer.innerHTML += createBaju(baju);
    });
  },
};

export default Papua;
