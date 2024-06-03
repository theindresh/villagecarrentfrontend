// src/components/CarSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from '../assets/Slider/car-967387_1920.png';
import img2 from '../assets/Slider/car-967470_1920.png';
import img3 from '../assets/Slider/oldtimer-1197800_1920.jpg';

const CarSlider = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="p-4">
            <img src={img1} alt="Car 1" className="w-full h-auto" />
            <div className="text-left mt-4">
              <p className="font-bold">WHITE</p>
              <p>Production: 2020-present</p>
              <p>Max speed: 37Km/h</p>
              <p>Engine: 4.0 H0000T</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4">
            <img src={img2} alt="Car 2" className="w-full h-auto" />
            <div className="text-left mt-4">
              <p className="font-bold">BLACK</p>
              <p>Production: 2018-present</p>
              <p>Max speed: 40Km/h</p>
              <p>Engine: 3.5 V8</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4">
            <img src={img3} alt="Car 3" className="w-full h-auto" />
            <div className="text-left mt-4">
              <p className="font-bold">RED</p>
              <p>Production: 2021-present</p>
              <p>Max speed: 42Km/h</p>
              <p>Engine: 5.0 V10</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarSlider;
