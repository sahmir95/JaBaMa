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
      className="sm:w-full lg:w-[80%] lg:mr-0 flex justify-center items-center pt-10 rounded relative"
    >
      <p className="font-medium sm:text-base sm:right-5 sm:top-5 lg:text-base absolute lg:top-0 right-0">
        {title}
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
      <div ref={scrl} className="mybox">
        {data.map((item) => {
          return (
            <div>
              <img
                className="w-full min-h-[108px] max-h-[216px] object-fill rounded-md"
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
};

export default Favplc;
