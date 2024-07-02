import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { decrement, increment } from "../../../redux/cart";
import "./CartButtons.css";


const Aftercart = () => {
    const {cartCount }=useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  return (
    <div className="after-cart">
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div className="cart-count">{cartCount}</div>
      <button
        className="cart-counter-btn"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default Aftercart;
