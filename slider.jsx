import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Добавлено Autoplay
import banner1 from './banners/banner1.webp';
import banner2 from './banners/banner2.webp';
import banner3 from './banners/banner3.webp';
import banner4 from './banners/banner4.webp';
import banner5 from './banners/banner5.webp';
import banner6 from './banners/banner6.webp';
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
    { image: banner5 },
    { image: banner6 },
  ];
  

  return (
    <div className="w-[80%] mx-auto bg-gray-100 mt-[30px]">
      <Swiper
        modules={[Pagination, Autoplay]} // Добавлен Autoplay
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000, 
    
          disableOnInteraction: false, 
        }}
        speed={800}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] flex items-center justify-center bg-black text-white">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination {
            background-color: white;
            margin-bottom: -10px;
          }
          .swiper-pagination-bullet {
            margin-top: 0px;
            width: 30px;
            height: 3px;
            border-radius: 2px;
            background-color: gray; 
          }
          .swiper-pagination-bullet-active {
            background-color: #facc15; 
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
