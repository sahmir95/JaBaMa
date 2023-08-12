"use client";

import "./swiperBox.css";
// import required modules
import CardWithSwiper from "../card with swiper/CardWithSwiper";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import React from "react";
import { typeSet } from "@/redux/featchers/filterSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  setTypeCottage,
  setTypeEcoTourism,
  setTypeHotel,
  setTypeVilla,
  setTypeReset,
} from "@/redux/featchers/filterSlice";

export default function BoxWithSwiper({
  children,
  data,
  city,
  title,
  subtitle,
  type,
}) {
  let scrl = useRef(null);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrolStart, setScrolStart] = useState(true);
  const dispatch = useDispatch();
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

  const setTypeOnViewing = (type) => {
    switch (type) {
      case "villa":
        dispatch(setTypeVilla());
        break;
      case "cottage":
        dispatch(setTypeCottage());
        break;
      case "hotel":
        dispatch(setTypeHotel());
        break;
      case "ecoTourism":
        dispatch(setTypeEcoTourism());
        break;
      default:
        break;
    }
  };

  return (
    <div className="sm:w-full sm:mt-8  sm:pr-5 lg:max-w-[1400px] lg:w-full  lg:mx-auto  flex flex-col justify-start items-start rounded">
      <div className="w-full flex items-center md:justify-between">
        <p className="flex flex-col gap-3 pb-4 sm:w-2/3 font-light sm:font-medium  sm:text-lg  lg:text-base ">
          <span>{title}</span>
          <span className="font-light text-xs">{subtitle}</span>
        </p>

        <div className="sm:w-1/3 flex items-start sm:justify-end gap-2 pb-4 ">
          <div className=" md:block border sm:ml-2 border-main-light-gray rounded-lg px-2 pb-2 pt-1 lg:ml-4">
            <Link
              onClick={() => setTypeOnViewing(type)}
              href={"/stays"}
              className="font-medium text-xs"
            >
              مشاهده همه
            </Link>
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

      <ul ref={scrl} onScroll={scrollCheck} className="box">
        {data &&
          data.map((item) => {
            return (
              <li key={item.id}>
                {React.cloneElement(children, {
                  obj: item,
                  rate: item.rate,
                  comments: item.comments,
                  title: item.title,
                  province: item.province,
                  city: item.city,
                  price: item.price.base || 0,
                  images: item.images,
                  bedroom: item.bedroom.rooms,
                  capacity: item.capacity,
                  hasDiscount: item.discount,
                  hasFavorit: false,
                  isFavorite: false,
                })}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
