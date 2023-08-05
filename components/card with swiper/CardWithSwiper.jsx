"use client";
import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import SwiperComponent from "../swiperComponent/Swiper";

export default function CardWithSwiper({
  rate,
  comments,
  title,
  images,
  city,
  province,
  price,
  bedroom,
  capacity,
  isCocacity,
}) {
  const height = 124;
  return (
    <div className="w-full h-full flex flex-col gap-2 items-end">
      <div className="w-full sm:h-[100px] md:h-[240px] lg:h-[192px]">
        <SwiperComponent images={images} />
      </div>
      <div className="w-full flex flex-col gap-2 lg:h-2/3">
        <div className="w-full flex  items-center gap-1">
          <Icon icon="ic:round-star" width="14" heigth="14" color="gold" />
          <p className="font-medium text-[0.625rem]">{rate}</p>
          <p className="font-light text-[0.625rem]">{`(${comments} دیدگاه)`}</p>
        </div>
        <p className="w-full font-medium text-sm text-right truncate">
          {`${title.replace("اجاره", "").replace(`${city}`, "")}`}
        </p>
        <p className="w-full h-4 font-medium text-[0.67rem] flex items-end text-right text-main-slate-gray">
          <span>{`استان ${province}،`}</span>
          <span> {city}</span>
          {bedroom && (
            <span className="flex items-end text-right">
              <span className="flex items-end mx-[2px] text-xl"> . </span>
              <span>{bedroom} اتاق</span>
            </span>
          )}
          {isCocacity && (
            <span className="flex items-end text-right">
              <span className=" flex mr-[2px] text-xl"> . </span>
              <span className="mx-1"> {capacity.base} نفر پایه </span> +
              <span className="mr-1"> {capacity.extra} نفر اضافه </span>
            </span>
          )}
        </p>
        <p className="w-full font-medium text-[0.75rem] flex items-center text-main-slate-gray">
          <span className="sm:hidden lg:block text-main-black text-[0.65rem]">
            شروع قیمت از:
          </span>
          <span className=" font-medium text-[0.8rem] mr-[4px] text-main-black">
            {price && price} تومان
          </span>
          <span>/هرشب</span>
        </p>
      </div>
    </div>
  );
}
