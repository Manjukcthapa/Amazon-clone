import React from "react";
import "./Product.css"

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
        <div className="product-info">
      <p>{title}</p>
      <p className="product-price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {
          Array(rating)
          .fill()
          .map((_) => {
            return <p>⭐</p>;
          })
        }
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}
export default Product;


//  Array(5) = [,,,,,]