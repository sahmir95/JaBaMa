import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Lazy,
} from "swiper/modules"
const Image = () => {
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
            >

                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Image;