import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, toggleCart, isInCart }) => {
  const [inCart, setInCart] = useState(isInCart);

  const handleClick = () => {
    const newInCart = !inCart;
    setInCart(newInCart);
    toggleCart(product, newInCart);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}원</p>
      <button onClick={handleClick} className={inCart ? 'in-cart' : ''}>
        {inCart ? '담김!' : '담기'}
      </button>
    </div>
  );
};

export default ProductCard;
