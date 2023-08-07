'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Lazy,
} from "swiper/modules"
import "./Image.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Image = () => {
    const image = [1,2,3,4,5]
    return (
        <div>
            <Swiper
                cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    lazy={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="swiper1"
            >
                {image.map((item) => {
                   return (
                           <SwiperSlide>
                               <p>Hello World {item}</p>
                           </SwiperSlide>
                       )
                })}

            </Swiper>
        </div>
    );
};

export default Image;