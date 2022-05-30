import React from 'react'
import "./productList.css";
import Product from '../product/Product';
import {products} from "../../data";

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
        {products.map((item) => (
          <Product/>
        ))}
      </div>
      {/* placeholder site*/}
      <a href="http://www.google.ca" target="_blank" rel="noreferrer">
        <img src="" alt="" className="p-img" />
      </a>
    </div>
  )
};

export default ProductList;