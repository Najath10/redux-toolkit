import React, { useState } from "react";
import products from "../../api/products.json";
import BeforeCart from "./CartButtons/BeforeCart";
import Aftercart from "./CartButtons/Aftercart";
import "./ProductList.css";
const ProductList = () => {
 const [count,setCount] =useState(0)
 const addToCart =() =>{
    setCount(1)
 }


  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product.title}</h3>
        {count > 0 ?   <Aftercart /> : <BeforeCart addToCart={addToCart} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
