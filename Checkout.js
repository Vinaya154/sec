import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <><Header /><div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://img.freepik.com/free-vector/sale-banner-voucher-template-vector-design-with-offer-details_1017-10724.jpg?w=740&t=st=1706379109~exp=1706379709~hmac=f52b9e70ebd3d117374445dcd8939f95016b4a80e7c237246f352a620ca0aba3"
          alt="" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div></>
  );
}

export default Checkout;