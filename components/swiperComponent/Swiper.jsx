"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
// Import Swiper styles
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

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
      className="w-full sm:h-[50%] md:h-[160px] flex justify-center items-center rounded"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
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
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-left w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {imgs.map((item) => {
          return (
            <SwiperSlide>
              <img className="rounded-lg" src={item.image} />
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
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-right w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
