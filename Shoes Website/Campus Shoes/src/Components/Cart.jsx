import React from "react";
import { useSelector } from "react-redux";
import Cartcard from "./Cartcard";

const Cart = () => {
  const showdata = useSelector((store) => store.cart.addcart);

  console.log(showdata);

  return (
    <div className="mt-24 m-auto w-[90vw] ">
      {showdata.map((data, index) => {
        return <Cartcard key={index} info={data} />;
      })}
    </div>
  );
};

export default Cart;
