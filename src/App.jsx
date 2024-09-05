import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CheckOut from './components/CheckOut';
import ContactUs from './components/Contact Us';
import Basket from './components/Basket';
import About from './components/About';
import Productv from './components/Products/';
import FakeData from './components/FakeData';

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
        <NavBar/>
        <h1>Cat Meow</h1>
        <Routes>
          <Route path="/" element={<CatList addToBasket={addToBasket} />} />
          <Route path="/basket" element={<Basket basketItems={basketItems} removeFromBasket={removeFromBasket} totalCost={totalCost} />} />
          {/* Add more routes for About, Checkout, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;