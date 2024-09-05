import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // CSS file for styling

const CatList = ({ addToBasket }) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
        const fakeCats = response.data.map(cat => ({
          id: cat.id,
          name: `Cat ${Math.floor(Math.random() * 1000)}`, // Fake name
          price: Math.floor(Math.random() * 100) + 10, // Fake price
          image: cat.url,
        }));
        setCats(fakeCats);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="cat-list">
      {cats.map(cat => (
        <div key={cat.id} className="cat-item">
          <img src={cat.image} alt={cat.name} style={{ width: '200px' }} />
          <h3>{cat.name}</h3>
          <p>Price: £{cat.price}</p>
          <button onClick={() => addToBasket(cat)}>Add to Basket</button>
        </div>
      ))}
    </div>
  );
};

export default CatList;