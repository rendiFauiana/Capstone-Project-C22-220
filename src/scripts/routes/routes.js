import Home from '../views/pages/home';
import Sumatera from '../views/pages/sumatera';
import Jawa from '../views/pages/jawa';
import Kalimantan from '../views/pages/kalimantan';
import Sulawesi from '../views/pages/sulawesi';
import Balinusra from '../views/pages/balinusra';
import Papua from '../views/pages/papua';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/sumatera': Sumatera,
  '/jawa': Jawa,
  '/kalimantan': Kalimantan,
  '/sulawesi': Sulawesi,
  '/balinusra': Balinusra,
  '/papua': Papua,
  '/detail/:id': Detail,
};

export default routes;
