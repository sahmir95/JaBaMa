"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Lazy,
} from "swiper/modules";
import React, { useRef, useState } from "react";
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
import { useDispatch } from "react-redux";
import { addDetailItem } from "@/redux/featchers/detailSlice";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function SwiperComponent({ obj, images, aspect }) {
  const [imgs, setImgs] = useState(images);
  const [swiperRef, setSwiperRef] = useState(null);
  const [isHide, setIsHide] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const dispatch = useDispatch();

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
      className={twMerge(
        "w-full  sm:h-full  box-border   lg:h-full flex justify-center items-center rounded-lg",
        aspect
      )}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        lazy={"true"}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        onReachBeginning={() => setIsHide(true)}
        onReachEnd={() => setIsHide(false)}
        dir="rtl"
        className="myswiper"
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
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow focus:outline-none"
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
        {imgs && imgs.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                href={{
                  pathname: "/stay",
                }}
                onClick={() => dispatch(addDetailItem(obj))}
                className="w-full"
              >
                <img
                  style={{
                    backgroundImage: "url(/images/image-placeholder.svg)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "64px 64px",
                    backgroundColor: "#d7d7d9",
                  }}
                  className="w-full aspect-[5/3] object-cover md:"
                  key={item}
                  src={item}
                  loading="lazy"
                />
                <div className=" swiper-lazy-preloader-white "></div>
              </Link>
            </SwiperSlide>
          );
        })}
        <div
          className={clsx(
            "absolute justify-center   top-1/2 right-2 z-10 flex items-center bg-main-snow rounded-full w-[28px] h-[28px]",
            { "opacity-40": isHide == true },
            { "opacity-100": isHide == "" },
            { hidden: !isHover },
            { flex: isHover }
          )}
        >
          <button
            onClick={prevHandler}
            className="bg-white  flex justify-center items-center w-full h-full rounded-full shadow focus:outline-none"
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
