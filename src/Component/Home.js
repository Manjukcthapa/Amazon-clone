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
          id="123434"
          title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray "
          rating={5}
          price={324.99}
          image="https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-12-9-in-cellular-space-gray-03182020?fmt=pjpg&hei=520"
          alt=""
        />
      </div>

      <div className="home-row">
        <Product
          id="1234567"
          title="Blink Mini – Compact indoor plug-in smart security camera,  Works with Alexa – 2 cameras "
          rating={5}
          price={64.99}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJGEpoGs7k9mJyJQtKXyymb3Lq3nYQl-Tom9vlqVUWbTBnUhPt79D7xzejp8-T-ql25VaPjrtOcEJpgWg6VMX6UNcwWYe2"
          alt=""
        />

        <Product
          id="123446"
          title="Echo Show 8 Adjustable Stand - Black "
          rating={5}
          price={24.99}
          image="https://i.ebayimg.com/images/g/A9oAAOSwk~Be-iK-/s-l1600.jpg"
          alt=""
        />
        <Product
          id="123487"
          title="2020 Newest HP 14 Inch Non-Touch Premium Laptop, AMD Athlon Silver 3050U up to 3.2"
          rating={5}
          price={400.99}
          image="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/vostro_notebooks/14_3480/pdp/notebook-vostro-14-3480-3481-apj-emea-pdp-gallery-504x350.jpg?fmt=jpg&wid=570&hei=400"
          alt=""
        />
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
