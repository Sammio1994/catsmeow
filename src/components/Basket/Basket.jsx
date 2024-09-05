import React from 'react';
import './Basket.css';

const Basket = ({ basketItems, removeFromBasket, totalCost }) => {
  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {basketItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basketItems.map(item => (
          <div key={item.id} className="basket-item">
            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: £{item.price}</p>
              <button onClick={() => removeFromBasket(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: £{totalCost}</h3>
    </div>
  );
};

export default Basket;