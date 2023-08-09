"use client";

// import required modules
import CardWithSwiper from "../card with swiper/CardWithSwiper";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import React from "react";
import "../../app/globals.css";
import "./fav.css";

const Favplc = ({ data, title }) => {
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
    let newScrollLeft = scrl.current.scrollLeft;
    if (
      -(scrl.current.scrollWidth - scrl.current.clientWidth) >
      newScrollLeft - 4
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    if (newScrollLeft >= -1) {
      setScrolStart(true);
    } else {
      setScrolStart(false);
    }
  };
  return (
    <div
      ref={withDiv}
      className="sm:w-full lg:mt-[100px] lg:max-w-[1400px] lg:w-full  lg:mx-auto flex flex-col justify-center items-center pt-10 rounded"
    >
      <div className="w-full flex items-center md:justify-between">
        <p className="flex sm:pr-5 flex-col gap-2 pb-4 sm:w-2/3 font-light sm:font-medium   ">
          <span className="sm:text-lg  lg:text-2xl">{title}</span>
          <span className="sm:text-sm  lg:text-base font-light">
            اقامتگاه در شهرهای پرطرفدار با ما
          </span>
        </p>

        <div className="flex items-start gap-2 pb-4">
          <div className=" md:block border border-main-light-gray rounded-lg px-2 pb-2 pt-1 ml-4">
            <button className="font-medium text-xs">مشاهده همه</button>
          </div>
          <button
            className={clsx(
              "sm:hidden lg:block border border-main-silver rounded-lg p-2",
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
          <button
            className={clsx(
              "sm:hidden lg:flex  border border-main-silver rounded-lg p-2",
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
        </div>
      </div>
      <div ref={scrl} onScroll={scrollCheck} className="mybox">
        {data.map((item) => {
          return (
            <div>
              <img
                className="aspect-[3/4] lg:aspect-[3/5] min-h-[108px] max-h-[216px] lg:max-h-[226px] object-fill rounded-md"
                src={item.image}
              />
              <span className="w-full flex text-[.95rem] justify-start font-medium pl-1">
                {item.name}،{" "}
                <span className="font-light mr-1"> {item.province}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favplc;
