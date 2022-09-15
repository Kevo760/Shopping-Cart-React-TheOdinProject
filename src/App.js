import './App.css';
import buckedup from './Files/images/buckedup.png';
import c4 from './Files/images/c4.png';
import ghost from './Files/images/ghost.png';
import nitraflex from './Files/images/nitraflex.png';
import prehd from './Files/images/prehd.png';
import thavage from './Files/images/thavage.png';
import totalwar from './Files/images/totalwar.png';
import wokeaf from './Files/images/wokeaf.png';
import MainPage from './Components/MainPage';
import MenuBar from './Components/MenuBar';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Cart from './Components/CartBar/Cart';
import Shop from './Components/ShopSection/Shop';
import { useState } from 'react';

function App() {
  const products = [
    {
      name:'Bucked Up',
      id: 1,
      image: buckedup,
      type: 'Preworkout',
      price: 39.99,
      quantity: 0
    },
    {
      name:'C4',
      id: 2,
      image: c4,
      type: 'Preworkout',
      price: 39.99,
      quantity: 0
    },
    {
      name:'Ghost',
      id: 3,
      image: ghost,
      type: 'Preworkout',
      price: 39.99,
      quantity: 0
    },
    {
      name:'Nitraflex',
      id: 4,
      image: nitraflex,
      type: 'Preworkout',
      price: 29.99,
      quantity: 0
    },
    {
      name:'Prehd',
      id: 5,
      image: prehd,
      type: 'Preworkout',
      price: 29.99,
      quantity: 0
    },
    {
      name:'Thavage',
      id: 6,
      image: thavage,
      type: 'Preworkout',
      price: 49.99,
      quantity: 0
    },
    {
      name:'Total War',
      id: 7,
      image: totalwar,
      type: 'Preworkout',
      price: 49.99,
      quantity: 0
    },
    {
      name:'Woke AF',
      id: 8,
      image: wokeaf,
      type: 'Preworkout',
      price: 59.99,
      quantity: 0
    }
  ]

  const { cart, setCart } = useState([]);

  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Shop products={products} />
        {/* <Routes>
          <Route path='/' element={<MainPage />}/>
        </Routes> */}
        
      </div>
    </Router>
  );
}

export default App;
