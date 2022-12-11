const createPulau = (pulau) => `
    <div>
        <img src="${pulau.gambar}" />
        <h6><a href="/#/${pulau.nama}">${pulau.nama}</a></h6>
        <p>${pulau.keterangan}</p>
    </div>
`;

const createBaju = (baju) => `
    <div>
        <img class ="lazyload" data-src="${baju.gambar}" alt="${baju.nama}">
        <a href="/#/detail/${baju.id}"><h4>${baju.nama}</h4></a>
        <p>${baju.deskripsi}</p>
    </div>
`;

const createDetailBaju = (baju) => `
    <div class="full-left">
        <img src="${baju.gambar}" alt="">
    </div>
    <div>
        <h3>${baju.nama}</h3>
        <p>${baju.deskripsi}</p>
    </div>
    <div id="maps"></div>  
    <div>
        <h3>Toko Penyewaan Pakaian</h3>
        <div class="list-toko"></div>
    </div>
`;

const createMaps = (sourceUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6663076376294!2d106.82267427325937!3d-6.17540833122916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2db8c5617%3A0x4e446b7ac891d847!2sMonas%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1668710551664!5m2!1sid!2sid') => `
    <iframe src="${sourceUrl}" width="530" height="240" style="border:0;" allowfullscreen="" 
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;

const createToko = (toko) => `
    <div class="space">
        <h4><button id="buttonMaps" value="${toko.value}">${toko.nama}</button></h4>
        <p>${toko.alamat}</p>
        <p>${toko.noHp}</p>
    </div>
`;

export {
  createPulau, createBaju, createDetailBaju,
  createMaps, createToko,
};
