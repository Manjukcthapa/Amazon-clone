import React from "react";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <p>{title}</p>
      <img src={image} alt="" />
      <p>
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}

export default CheckoutProduct;
