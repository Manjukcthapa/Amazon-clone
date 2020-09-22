import React from "react";
import "./Checkoutproduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {

   
  return (
    <div className="checkoutProduct">
      <img  className="checkoutproduct-img" src={image} alt="" />
   <div className="checkout-info">
      <p className="checkout-title">{title}</p>
      <p className="checkout-price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="productrating_rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <p key={index}>⭐</p>;
            })}
        </div>
     <button className="productbutton" onClick={removeFromBasket}>Remove Button</button>
      </div>
     
    </div>
  );
}

export default CheckoutProduct;
