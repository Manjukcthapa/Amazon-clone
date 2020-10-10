import React from "react";
import Product from "../Component/Product";
import "./Home.css";
import { useStateValue } from "../StateProvider";
import HomeSlider from "../Component/HomeSlider";

function Home() {
  const [{ products, searchTerm }] = useStateValue();

  const filteredProduct = searchTerm.trim().length ? products.filter((item => item.title.toUpperCase().includes(searchTerm.toUpperCase()))) : products;

  return (
    <div className="home">
      <HomeSlider></HomeSlider>
      <div className="home-row">
        {
          filteredProduct.map((item, index) => {
            return <Product key={index} id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image}></Product>
          })
        }
      </div>
      
    </div>
  );
}
export default Home;
