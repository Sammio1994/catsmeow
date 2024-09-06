import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CheckOut from './components/CheckOut/CheckOut';
import ContactUs from './components/ContactUs/ContactUs';
import Basket from './components/Basket/Basket';
import About from './components/About/About';
import Product from './components/Product/Product';
import NavFooter from './components/NavFooter/NavFooter';

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (cat) => {
    setBasketItems([...basketItems, cat]);
  };

  const removeFromBasket = (id) => {
    setBasketItems(basketItems.filter(item => item.id !== id));
  };

  const totalCost = basketItems.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div className="App">
        <NavBar itemCount={basketItems.length} />
        <h1>Cats Meow</h1>
        <Routes>
          <Route path="/" element={<Product addToBasket={addToBasket} />} />
          <Route path="/Basket" element={<Basket basketItems={basketItems} removeFromBasket={removeFromBasket} totalCost={totalCost} />} />
          <Route path="/about" element={<About />} />
          <Route path="/Checkout" element={<CheckOut/> }/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        <NavFooter/>
        
      </div>
    </Router>
  );
}

export default App;
