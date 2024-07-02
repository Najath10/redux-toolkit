import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/cart";
import "./CartButtons.css";

const Aftercart = ({ cartCount,productID }) => {
  const dispatch = useDispatch();
  return (
    <div className="after-cart">
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(decrement(productID))}
      >
        -
      </button>
      <div className="cart-count">{cartCount}</div>
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(increment(productID))}
      >
        +
      </button>
    </div>
  );
};

export default Aftercart;
