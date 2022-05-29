import React from 'react'
import "./productList.css";
import Product from '../product/Product';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Placeholder</h1>
        <p className="pl-desc">
          Placeholder placeholder
        </p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
};

export default ProductList;