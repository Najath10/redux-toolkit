import React, { useMemo } from "react";
import Aftercart from "./Aftercart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";

const CartButtons = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo (()=>{
  return cartList.find((item) => item?.id === product.id)?.count||0;
    },[cartList,])
  return (
    <>
      {cartCount > 0 ? (
        <Aftercart productID={product.id} cartCount={cartCount} />
      ) : (
        <BeforeCart product={product} />
      )}
    </>
  );
};

export default CartButtons;
