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
import BuckedUpPage from './Components/ProductPage/BuckedUpPage';
import C4Page from './Components/ProductPage/C4Page';
import GhostPage from './Components/ProductPage/GhostPage';
import NitraflexPage from './Components/ProductPage/NitraflexPage';
import PrehdPage from './Components/ProductPage/PrehdPage';
import ThavagePage from './Components/ProductPage/ThavagePage';
import TotalWarPage from './Components/ProductPage/TotalWarPage';
import WokeAfPage from './Components/ProductPage/WokeAfPage';


function App() {
  const products = [
    {
      name:'Bucked Up',
      id: 1,
      image: buckedup,
      type: 'Preworkout',
      price: 39.99,
      quantity: 1,
      link: '/shop/buckedup'
    },
    {
      name:'C4',
      id: 2,
      image: c4,
      type: 'Preworkout',
      price: 39.99,
      quantity: 1,
      link: '/shop/c4'
    },
    {
      name:'Ghost',
      id: 3,
      image: ghost,
      type: 'Preworkout',
      price: 39.99,
      quantity: 1,
      link: '/shop/ghost'
    },
    {
      name:'Nitraflex',
      id: 4,
      image: nitraflex,
      type: 'Preworkout',
      price: 29.99,
      quantity: 1,
      link: '/shop/nitraflex'
    },
    {
      name:'Prehd',
      id: 5,
      image: prehd,
      type: 'Preworkout',
      price: 29.99,
      quantity: 1,
      link: '/shop/prehd'
    },
    {
      name:'Thavage',
      id: 6,
      image: thavage,
      type: 'Preworkout',
      price: 49.99,
      quantity: 1,
      link: '/shop/thavage'
    },
    {
      name:'Total War',
      id: 7,
      image: totalwar,
      type: 'Preworkout',
      price: 49.99,
      quantity: 1,
      link: '/shop/totalwar'
    },
    {
      name:'Woke AF',
      id: 8,
      image: wokeaf,
      type: 'Preworkout',
      price: 59.99,
      quantity: 1,
      link: '/shop/wokeaf'
    }
  ]

  const [ cart, setCart ] = useState([]);

  // If product is in cart increment product quantity else add the product
  const addToCart = (product) => {
    const findProduct = cart.find(item => item.id === product.id)


    if(findProduct === undefined) {
      setCart([...cart, product])
    } else {
      addQuantity(findProduct)
    }
    showCartToggle()
  }


  const addQuantity = (product) => {
    setCart(prevState => prevState.map(item => {
      if(item.id === product.id) {
        return {...item, quantity: product.quantity + 1}
      }
      return item
    }))
  }

  const subtractQuantity = (product) => {
    setCart(prevState => prevState.map(item => {
      if(item.id === product.id) {
        return {...item, quantity:  product.quantity - 1}
      }
      return item
    }))
  }



  const [ showCart, setShowCart ] = useState(false);

  const showCartToggle = () => {
    setShowCart(prevState => prevState = !showCart)
    console.log(cart)
  };



  return (
    <Router>
      <div className="App">
        <MenuBar showCartToggle={showCartToggle}/>
        {
          showCart ?
          <Cart showCartToggle={showCartToggle} cart={cart} addQuantity={addQuantity} subtractQuantity={subtractQuantity}/>
          :
          null
        }
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/shop' element={<Shop products={products} />}/>
          <Route path='/shop/buckedup' element={<BuckedUpPage products={products} addToCart={addToCart}/>}/>
          <Route path='/shop/c4' element={<C4Page products={products} addToCart={addToCart}/>}/>
          <Route path='/shop/ghost' element={<GhostPage products={products} addToCart={addToCart}/>}/>
          <Route path='/shop/nitraflex' element={<NitraflexPage products={products} addToCart={addToCart}/>} />
          <Route path='/shop/prehd' element={<PrehdPage products={products} addToCart={addToCart}/>}/>
          <Route path='/shop/thavage' element={<ThavagePage products={products} addToCart={addToCart}/>} />
          <Route path='/shop/totalwar' element={<TotalWarPage products={products} addToCart={addToCart}/>} />
          <Route path='/shop/wokeaf' element={<WokeAfPage products={products} addToCart={addToCart}/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
