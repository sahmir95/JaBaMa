"use client";

import "./swiperBox.css";
// import required modules
import CardWithSwiper from "../card with swiper/CardWithSwiper";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import React from "react";

export default function BoxWithSwiper({
  children,
  data,
  city,
  title,
  subtitle,
}) {
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
      className="sm:w-full sm:pr-5 lg:w-[80%] lg:mr-0 flex flex-col justify-start items-start rounded"
    >
      <div className="w-full flex items-center md:justify-between">
        <p className="flex flex-col gap-3 pb-4 sm:w-2/3 font-light sm:font-bold  sm:text-lg  lg:text-base ">
          <span>{title}</span>
          <span className="font-light text-xs">{subtitle}</span>
        </p>

        <div className="flex items-start pb-4">
          <div className=" md:block border border-main-light-gray rounded-lg px-2 pb-2 pt-1 ml-4">
            <button className="font-bold text-xs">مشاهده همه</button>
          </div>
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
          <button
            className={clsx(
              "sm:hidden md:block absolute left-10 top-0 border border-main-silver rounded-lg p-2",
              { "opacity-40": scrolStart },
              { "opacity-100": !scrolStart }
            )}
            onClick={() => slide(+150)}
          >
            <Icon
              icon="grommet-icons:next"
              color="black"
              width="14"
              height="14"
            />
          </button>
        </div>
      </div>

      <ul ref={scrl} onScroll={scrollCheck} className="box">
        {data.map((item) => {
          return (
            <li>
              {React.cloneElement(children, {
                rate: item.rate,
                comments: item.comments,
                title: item.title,
                province: item.province,
                city: item.city,
                price: item.price.base || "",
                images: item.images,
                bedroom: item.bedroom.rooms,
                capacity: item.capacity,
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
