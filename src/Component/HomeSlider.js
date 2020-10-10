import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Home.css";

const imageList = [
    <img
    className="banner-img"
    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
    alt=""
  />,
  <img
  className="banner-img"
  src="https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmV2rrLJWC7SPyrSGsGnYX27ghTwn8XdVgu8PpwDe6QA6m/1500x300_Starts_Banner_v2._CB474351192_.gif"
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
