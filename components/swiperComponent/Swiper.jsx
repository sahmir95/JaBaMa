"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Lazy,
} from "swiper/modules";
import { lazy, useEffect, useRef, useState } from "react";
import clsx from "clsx";
// Import Swiper styles
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Icon } from "@iconify/react";

export default function SwiperComponent({ images }) {
  const [imgs, setImgs] = useState(images);
  const [swiperRef, setSwiperRef] = useState(null);
  const [isHide, setIsHide] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const nextHandler = () => {
    swiperRef.slideNext();
    if (!isEnd) {
      setIsEnd(true);
    }
    if (isHide) {
      setIsHide("");
    }
  };
  const prevHandler = () => {
    swiperRef.slidePrev();
    if (isEnd) {
      setIsEnd(false);
    }
    if (!isHide) {
      setIsHide("");
    }
  };
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="w-full sm:h-[50%] md:h-[180px] flex justify-center items-center rounded-lg"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        lazy={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        onReachBeginning={() => setIsHide(true)}
        onReachEnd={() => setIsHide(false)}
        dir="rtl"
        className="swiper"
      >
        <div
          className={clsx(
            "absolute justify-center  left-2 z-10 flex items-center bg-main-snow w-[28px] h-[28px] rounded-full top-1/2",
            { "opacity-40": isHide === false },
            { "opacity-100": isHide === "" },
            { hidden: !isHover },
            { flex: isHover }
          )}
        >
          <button
            onClick={() => nextHandler()}
            class="bg-white  flex justify-center items-center w-full h-full rounded-full shadow focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
              hFlip={true}
            />
          </button>
        </div>
        {imgs.map((item) => {
          return (
            <SwiperSlide>
              <img className="rounded-lg" src={item} loading="lazy" />
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
        <div
          class={clsx(
            "absolute justify-center   top-1/2 right-2 z-10 flex items-center bg-main-snow rounded-full w-[28px] h-[28px]",
            { "opacity-40": isHide == true },
            { "opacity-100": isHide == "" },
            { hidden: !isHover },
            { flex: isHover }
          )}
        >
          <button
            onClick={prevHandler}
            class="bg-white  flex justify-center items-center w-full h-full rounded-full shadow focus:outline-none"
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
