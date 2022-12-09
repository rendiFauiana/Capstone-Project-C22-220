/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */

import UrlParser from '../../routes/url-parser';
import Pulau from '../../data/Pulau';
import { createDetailBaju, createMaps, createToko } from '../templates/tempaltes-pages';

const Detail = {
  async render() {
    return `
        <div class="main">
            <h2>Pakaian Adat Di Pulau Sumatera</h2>
            <div class="content"></div>
        </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const bajuContainer = document.querySelector('.content');
    let dataBaju;
    let lokasiPulau;

    for (let i = 0; i < Pulau.length; i++) {
      dataBaju = Pulau[i].baju.find((baju) => baju.id == url.id);
      if (dataBaju != undefined) {
        lokasiPulau = i;
        break;
      }
    }
    bajuContainer.innerHTML = createDetailBaju(dataBaju);

    const tokoContainer = document.querySelector('.list-toko');
    Pulau[lokasiPulau].tokoBaju.forEach((toko) => {
      tokoContainer.innerHTML += createToko(toko);
    });

    const mapsContainer = document.querySelector('#maps');
    mapsContainer.innerHTML = createMaps();

    const buttonMaps = document.querySelectorAll('#buttonMaps');
    buttonMaps.forEach((button) => {
      button.addEventListener('click', () => {
        const sourceUrl = button.value;
        mapsContainer.innerHTML = '';
        mapsContainer.innerHTML = createMaps(sourceUrl);
      });
    });
  },
};

export default Detail;
