import Pulau from '../../data/Pulau';
import { createPulau } from '../templates/tempaltes-pages';

const Home = {
  async render() {
    return `
       <header id="home">
          <div class="overlay"></div>
          <video autoplay muted loop>
              <source src="./videos/video-indonesia.mp4" type="video/mp4" />
          </video>
          <div class="intro">
            <h3>RUMAH BUDAYA</h3>
            <p>
              Rumah Budaya merupakan referensi utama untuk kalian dalam memilih pakaian adat pada saat
              pembelajaran di kelas.
              <br>Sesuai dengan kebijakan pemerintah untuk menggunakan pakaian adat, maka kami hadir sebagai
              solusi maupun
              referensi utama bagi kalian dalam pemilihan pakaian adat
            </p>
            <p>
              <a href="#aboutus" class="tombol">EXPLORE</a>
            </p>
          </div>
        </header>
        <main>
          <section id="aboutus">
            <div class="layar-dalam">
              <h3>Pakaian Adat di Setiap Pulau </h3>
              <p class="ringkasan">
                Berikut pakaian adat di berbagai pulau untuk referensimu
              </p>
            </div>
          </section>
          <section class="abuabu">
            <div class="layar-dalam support" id="support"></div>
          </section>
          <section id="gallery">
            <div><img src="./images/home/slidersumatera.png" /></div>
            <div><img src="./images/home/slidersumatera2.png" /></div>
            <div><img src="./images/home/sliderjawa.png" /></div>
            <div><img src="./images/home/sliderjawa2.png" /></div>
            <div><img src="./images/home/sliderkalimantan.png" /></div>
            <div><img src="./images/home/sliderkalimantan2.png" /></div>
            <div><img src="./images/home/sliderbalinusra.png" /></div>
            <div><img src="./images/home/sliderpapua.png" /></div>
          </section>
          <section id="team">
            <div class="layar-dalam">
              <h3>Team Capstone C22-220</h3>
              <p class="ringkasan">
                  Tentang Kami
              </p>
              <div class="tim">
                <div>
                  <img src="./images/home/team1.png" />
                  <h6>Rendi Fauziana</h6>
                  <span>F295X0716</span>
                </div>
                <div>
                  <img src="./images/home/tim2.png" />
                  <h6>Adri Faisal</h6>
                  <span>F506X1064</span>
                </div>
                <div>
                  <img src="./images/home/tim3.png" />
                  <h6>Septario Ferintarozi</h6>
                  <span>F248X0540</span>
                </div>
                <div>
                  <img src="./images/home/tasya.png" />
                  <h6>Natasya Aulianti</h6>
                  <span>F246Y0490</span>
                </div>
              </div>
            </div>
          </section>
          <section class="abuabu" id="blog">
            <div class="layar-dalam">
              <h3>Video Budaya</h3>
              <p class="ringkasan">
                Video Referensi Pemakaian Pakaian Adat
              </p>
              <div class="blog">
                <div class="area">
                  <article>
                    <h4>Pakaian Adat Jawa</h4>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/pmZsWRkkW14"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                    <figcaption>
                      Referensi pemakaian pakaian adat Jawa Tengah
                    </figcaption>
                  </article>
                </div>
                <div class="area">
                  <article>
                    <h4>Pakaian Adat Sumatera</h4>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/wQ9d1l8w27Y"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
                    <figcaption>
                      Referensi pemakaian pakaian adat Sumatera Utara
                    </figcaption>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer id="contact">
          <div class="layar-dalam">
            <div class="copyright">&copy; 2022 Capstone C22-220</div>
          </div>
        </footer>
     `;
  },

  async afterRender() {
    const pulauContainer = document.querySelector('#support');
    Pulau.forEach((pulau) => {
      pulauContainer.innerHTML += createPulau(pulau);
    });
  },
};

export default Home;
