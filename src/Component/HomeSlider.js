import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';


const imageList = [
    <img
    className="banner-img"
    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
    alt=""
  />,
  <img
  className="banner-img"
  src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255138_1316037_US_PD20_3296384_1500x375_2X_US_en.jpg"
  alt=""
/>,
<img
 className="banner-img"
 src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PEX/PeX-Top-PC-1500X375.jpg"
 alt=""
/>,
<img
 className="banner-img"
 src="http://assets.vg247.com/current//2015/07/amazon_prime_day_banner.jpg"
 alt=""
/>


  ];

function HomeSlider() {
  return (
    <div className="test">
      <AliceCarousel 
        items={imageList} 
        disableButtonsControls={true} 
        autoPlay={true} 
        infinite={true}
        animationDuration={3000}
        disableDotsControls={true}/>
    </div>
  );
}
export default HomeSlider;
