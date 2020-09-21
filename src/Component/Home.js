import React from "react";
import Product from "../Component/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="banner-img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
        alt=""
      />

      <div className="home-row">
        <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids - requires compatible Alexa device "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />

        <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />
      </div>

      <div className="home-row">
        <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />

        <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />
        <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />
      </div>
      
      <div className="home-row">
      <Product
          id="123456"
          title="Echo Glow - Multicolor smart lamp for kids "
          rating={5}
          price={18.99}
          image="https://qvc.scene7.com/is/image/QVC/e/78/e305178.001?$aempdzoom$"
          alt=""
        />
      </div>
    </div>
  );
}
export default Home;
