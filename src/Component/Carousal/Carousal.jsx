import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export const Carousal = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={70}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          Slide vds,fkjhfhuigfdguybfsdnbfhjguy fdsnfkhd dsnfkhd dsjbjhi1
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};
