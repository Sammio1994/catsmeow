import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import CheckOut from './components/CheckOut/CheckOut';
import ContactUs from './components/ContactUs/ContactUs';
import Basket from './components/Basket/Basket';
import About from './components/About/About';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

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
        <NavBar />
        <h1>Cats Meow</h1>
        <Routes>
          <Route path="/" element={<Product addToBasket={addToBasket} />} />
          <Route path="/Basket" element={<Basket basketItems={basketItems} removeFromBasket={removeFromBasket} totalCost={totalCost} />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/Checkout" element={<CheckOut/> }/>
          <Route path="/contactus" element={<ContactUs/>}/>

        </Routes>
      </div>
    </Router>
  );
}


export default App;
