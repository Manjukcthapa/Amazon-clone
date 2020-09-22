import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          
          {basket.map((item, index) => (
              <CheckoutProduct
              key={index}
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />

      ))

          }
        </div>
      )}
    </div>
  );
}

export default CheckOut;
