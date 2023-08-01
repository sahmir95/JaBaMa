"use client";
import { Icon } from "@iconify/react";
import React from "react";
import SwiperComponent from "../swiperComponent/Swiper";

export default function CardWithSwiper({
  rate,
  comments,
  title,
  images,
  city,
  province,
  price,
  children,
}) {
  return (
    <div className="sm:w-[50%] md:w-[22.5%] h-full flex flex-col gap-2 items-end">
      <SwiperComponent images={images} />
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex  items-center gap-1">
          <Icon icon="ic:round-star" width="14" heigth="14" color="gold" />
          <p className="font-medium text-[0.625rem]">{rate}</p>
          <p className="font-light text-[0.625rem]">{`(${comments} دیدگاه)`}</p>
        </div>
        <p className="w-full font-medium text-sm text-right truncate">
          {`${title.slice(
            //boresh mide matn ro
            title.indexOf("ویلا"), //az koja
            title.indexOf(city) // ta koja
          )}`}
        </p>
        <p className="w-full font-medium text-[0.675rem] text-right text-main-slate-gray">
          <span>{`استان ${province}،`}</span>
          <span> {city}</span>
        </p>
        <p className="w-full font-medium text-[0.75rem] flex  text-main-slate-gray">
          <span className=" font-medium text-[0.8rem] text-main-black">
            {price} تومان
          </span>
          <span>/هرشب</span>
        </p>
      </div>
    </div>
  );
}
