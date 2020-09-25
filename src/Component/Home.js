import React from "react";
import Product from "../Component/Product";
import "./Home.css";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ products, searchTerm }] = useStateValue();

  const filteredProduct = searchTerm.trim().length ? products.filter((item => item.title.toUpperCase().includes(searchTerm.toUpperCase()))) : products;

  return (
    <div className="home">
      <img
        className="banner-img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
        alt=""
      />

      <div className="home-row">
        {
          filteredProduct.map((item, index) => {
            return <Product id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image}></Product>
          })
        }
      </div>
      
    </div>
  );
}
export default Home;
