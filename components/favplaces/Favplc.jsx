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
      className="sm:w-full lg:mt-[100px] lg:w-full lg:px-20 lg:mr-0 flex flex-col justify-center items-center pt-10 rounded relative"
    >
      <div className="w-full flex items-center md:justify-between">
        <p className="flex sm:pr-5 flex-col gap-3 pb-4 sm:w-2/3 font-light sm:font-medium  sm:text-lg  lg:text-base ">
          <span>{title}</span>
        </p>

        <div className="flex items-start gap-2 pb-4">
          <div className=" md:block border border-main-light-gray rounded-lg px-2 pb-2 pt-1 ml-4">
            <button className="font-medium text-xs">مشاهده همه</button>
          </div>
          <button
            className={clsx(
              "sm:hidden md:block border border-main-silver rounded-lg p-2",
              { "opacity-40": !scrolEnd },
              { "opacity-100": scrolEnd }
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
              "sm:hidden md:flex  border border-main-silver rounded-lg p-2",
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
      <div ref={scrl} className="mybox">
        {data.map((item) => {
          return (
            <div>
              <img
                className="w-full min-h-[108px] max-h-[216px] lg:max-h-[226px] object-fill rounded-md"
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
