import React from "react";
import "./CartButtons.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";

const BeforeCart = (product) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button
        className="add-cart-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BeforeCart;
