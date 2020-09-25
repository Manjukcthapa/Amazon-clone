import React from "react";
import Product from "../Component/Product";
import "./Home.css";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ products }, dispatch] = useStateValue();

  return (
    <div className="home">
      <img
        className="banner-img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
        alt=""
      />

      <div className="home-row">
        {
          products.map(item => {
            return <Product id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image}></Product>
          })
        }
      </div>
      
      <div className="home-row">
      <Product
          id="123498"
          title="Apple iMac (27-inch, 8GB RAM, 1TB Storage) Previous ModelApple iMac (27-inch, 8GB RAM, 1TB Storage) Previous Model "
          rating={5}
          price={654.99}
          image="https://i.ebayimg.com/images/g/aEIAAOSwkupfEd2C/s-l640.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Home;
