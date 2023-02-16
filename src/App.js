import './App.css';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Addtocart from './Component/Addtocart';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item, i) => (i !== id)))
    setCartItemCount((num) => num -1)
    console.log(id)
    // let prod = cart.filter((el) => console.log(el, "element") )
  }

  useEffect(()=>{
    let total = 0;
    cart?.map(item => total += item.price)
    setTotalPrice(total)
},[cart])
  return (
    <div>
      <Router>
        <Navbar count ={cartItemCount}/>
        <Routes>
          <Route exact path="/" element={<Product 
            setCartItemCount={setCartItemCount} cartItemCount={cartItemCount}
            setTotalPrice={setTotalPrice} totalPrice={totalPrice}
            setCart={setCart} cart={cart}
          
          />}/> 
          <Route exact path="/addtocart" element={<Addtocart 
            cartItemCount={cartItemCount}
            totalPrice={totalPrice}
            cart={cart}
            removeFromCart={removeFromCart}
          />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
