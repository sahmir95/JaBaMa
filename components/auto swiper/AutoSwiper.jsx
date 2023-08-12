"use client";
import SwiperComponent from "../swiperComponent/Swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./autoSwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function AutoSwiper() {
  const images = [
    "https://cdn.jabama.com/image/jabama-images/1297502/0f33bf7d-cbdf-4fc4-8337-fdf2f72bfa7b.jpg",
    "https://cdn.jabama.com/image/jabama-images/1297502/75cfa889-7309-43b9-a0c7-737551453966.jpg",
    "https://cdn.jabama.com/image/jabama-images/1297502/7ef88b35-5021-4b2e-b3c6-20b2f4060b3f.jpg",
    "https://cdn.jabama.com/image/jabama-images/1297502/f1c8b0f8-3ee4-4aa6-b272-6316dc478679.jpg",
    "https://cdn.jabama.com/image/jabama-images/1297502/34609171-bc26-498d-a378-1862c117ed5f.jpg",
  ];
  return (
    <div className="w-full sm:min-h-[160px] lg:hidden px-[20px] flex items-center justify-center rounded">
      <Swiper
        dir="rtl"
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-wrapper swiper"
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} loading="lazy" className="rounded" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
