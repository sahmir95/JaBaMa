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
import "./SwiperDetailPage.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperDetailPage = ({images}) => {
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
                {images.map((item) => {
                    return (
                        <SwiperSlide>
                            <div style={{
                                backgroundImage: "url(/images/image-placeholder.svg)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>
                                <img loading="lazy" className="aspect-[5/4] w-full " src={item}/>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};

export default SwiperDetailPage;