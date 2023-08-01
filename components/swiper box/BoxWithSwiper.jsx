"use client";

import "./swiperBox.css";
// import required modules
import CardWithSwiper from "../card with swiper/CardWithSwiper";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import React from "react";

export default function BoxWithSwiper({ children, data, numbers }) {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrolStart, setScrolStart] = useState(true);
  const withDiv = useRef(null);
  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (Math.floor(scrollX) < -(withDiv.current.scrollWidth + 150)) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    if (Math.floor(scrollX) > -5) {
      setScrolStart(true);
    } else {
      setScrolStart(false);
    }
  };
  return (
    <div
      ref={withDiv}
      className="sm:w-full sm:mr-[5%] lg:w-[80%] lg:mr-0 flex justify-center items-center pt-12 rounded relative"
    >
      <p className="font-light sm:text-xs sm:top-5 lg:text-base absolute lg:top-0 right-0">
        اقامتِ با کیفیت در{" "}
        <span>{data.city == "تهران" ? "پایتخت" : data.city}</span> با ما
      </p>
      <button
        className={clsx(
          "sm:hidden md:block absolute left-0 top-0 border border-main-silver rounded-lg p-2",
          { "opacity-40": scrolEnd },
          { "opacity-100": !scrolEnd }
        )}
        onClick={() => slide(-150)}
      >
        <Icon
          icon="grommet-icons:next"
          color="black"
          width="14"
          height="14"
          hFlip={true}
        />
      </button>

      <ul ref={scrl} onScroll={scrollCheck} className="box">
        {numbers.map((item) => {
          return (
            <li className="w-[22.5%]">
              {React.cloneElement(children, {
                rate: data.rate,
                comments: data.comments,
                title: data.title,
                province: data.province,
                city: data.city,
                price: data.price.base,
                images: data.images,
              })}
            </li>
          );
        })}
      </ul>

      <button
        className={clsx(
          "sm:hidden md:block absolute left-10 top-0 border border-main-silver rounded-lg p-2",
          { "opacity-40": scrolStart },
          { "opacity-100": !scrolStart }
        )}
        onClick={() => slide(+150)}
      >
        <Icon icon="grommet-icons:next" color="black" width="14" height="14" />
      </button>
    </div>
  );
}