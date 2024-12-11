//M.D Shazidul 
import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import tic_tac_toe from "../../img/tic-tac-toe.png";
import medicare from "../../img/medicare.png";
import latice from "../../img/Latice spice restaurent.png";
import Pizza from "../../img/Pizza hut.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={tic_tac_toe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={medicare} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pizza} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={latice} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
