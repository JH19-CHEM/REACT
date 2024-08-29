import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <>
      <div className="black-box">
        <div className="cart-info">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
      <header>
        <div className="project-info">
          <h1>신발 상품 목록</h1>
          <p>현재 6개의 상품이 있습니다.</p>
        </div>
      </header>
    </>
  );
};

export default Header;
