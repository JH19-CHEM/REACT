import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image1.png' },
    { id: 2, name: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: '25,000', image: '../image2.png' },
    { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image3.png' },
    { id: 4, name: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: '../image4.png' },
    { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image5.png' },
    { id: 6, name: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: '../image6.png' }
  ];

  const toggleCart = (product, isAdding) => {
    if (isAdding) {
      setCart(prevCart => [...prevCart, product]);
    } else {
      setCart(prevCart => prevCart.filter(item => item.id !== product.id));
    }
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <div className="main-content">
        <ProductList products={products} toggleCart={toggleCart} cart={cart} />
      </div>
    </div>
  );
};

export default App;
