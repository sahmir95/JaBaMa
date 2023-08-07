"use client";
import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import SwiperComponent from "../swiperComponent/Swiper";
import toFarsiNumber from "@/utils/toFaNumber";
import { twMerge } from "tailwind-merge";

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
  classNames = {
    images: "",
    title: "",
    rate: "",
    comment: "",
    middle: '',
    bottom: "",
    startPrice: "",
    price: ""
  },
  isCocacity,
  hasDiscount,
  isBeginText,
  hasReserv,
  hasFavorit,
}) {
  const height = 124;
  return (
    <div className="w-full h-full flex flex-col gap-2 items-end">
      <div className={twMerge("w-full relative", classNames?.images)}>
        {hasFavorit && (
          <div className="absolute top-2 left-2 z-10">
            <button>
              <Icon
                icon="material-symbols:favorite-outline"
                color="white"
                width="20"
              />
            </button>
          </div>
        )}
        <SwiperComponent images={images} />
      </div>
      <div className="w-full flex flex-col gap-2 lg:h-2/3">
        <div className="w-full flex  items-center gap-1">
          <Icon icon="ic:round-star" width="14" heigth="14" color="orange" />
          <p className={twMerge("font-medium text-[0.625rem]", classNames?.rate)}>{toFarsiNumber(rate)}</p>
          <p className={twMerge("font-light text-[0.625rem]", classNames?.comment)}>{`(${toFarsiNumber(comments)} دیدگاه)`}</p>
        </div>
        <p className={twMerge("w-full font-medium text-sm text-right truncate", classNames?.title)}>
          {`${title.replace("اجاره", "").replace(`${city}`, "")}`}
        </p>
        <p className={twMerge("w-full h-4 font-medium text-[0.67rem] flex items-end text-right text-main-slate-gray", classNames?.middle)}>
          <span>{`استان ${province}،`}</span>
          <span> {city}</span>
          {bedroom && (
            <span className="flex items-end text-right">
              <span className="flex items-end mx-[2px] text-xl"> . </span>
              <span>{bedroom} اتاق</span>
            </span>
          )}
          {capacity && (
            <span className="flex items-end text-right">
              <span className=" flex mr-[2px] text-xl"> . </span>
              <span className="mx-1"> {toFarsiNumber(capacity?.base)} نفر پایه </span>
              {capacity?.extra && 
              <>
                <span> + </span>
                <span className="mr-1"> {capacity?.extra && toFarsiNumber(capacity.extra)} نفر اضافه </span>
              </>
              }
            </span>
          )}
        </p>
        {hasDiscount > 0 && (
          <div className="w-full ">
            <p className="w-[42%] flex justify-center bg-[rgb(255,245,246)] text-main-dark-red py-[1px] rounded-2xl border border-main-dark-red font-medium text-[0.75rem]">
              % تا {hasDiscount} درصد تخفیف
            </p>
          </div>
        )}
        <p className={twMerge("w-full font-medium text-[0.75rem] flex items-center text-main-slate-gray", classNames?.bottom)}>
          {isBeginText && (
            <span className={twMerge("sm:hidden lg:block text-main-black text-[0.65rem]", classNames?.startPrice)}>
              شروع قیمت از:
            </span>
          )}
          <span className={twMerge("flex font-medium text-[0.75rem] mr-[4px] text-main-black", classNames?.price)}>
            {hasDiscount > 0 ? (
              <span className="text-right flex gap-1">
                <span className="line-through text-main-silver">{price}</span>
                <span>{toFarsiNumber(price - (price * hasDiscount) / 100)}</span>
              </span>
            ) : (
              <span>{toFarsiNumber(price)}</span>
            )}{" "}
            تومان
          </span>
          <span>/ هرشب</span>
        </p>
        {hasReserv && (
          <div className="w-full">
            <p className=" w-[36%] py-[3px] flex gap-1 justify-center items-center border border-main-light-gray rounded-lg font-medium text-[0.65rem] text-main-steel-gray">
              <Icon icon="ant-design:thunderbolt-filled" width="12" />
              <span>رزرو آنی و قطعی</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
