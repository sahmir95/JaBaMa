"use client";
import { addDetailItem } from "@/redux/featchers/detailSlice";
import {
  addFavoritePlace,
  removeFavorite,
} from "@/redux/featchers/favoriteSlice";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SwiperComponent from "../swiperComponent/Swiper";
import toFarsiNumber from "@/utils/toFaNumber";
import { twMerge } from "tailwind-merge";

export default function CardWithSwiper({
  obj,
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
    aspect: '',
    images: "",
    title: "",
    rate: "",
    aspect: "",
    comment: "",
    middle: '',
    bottom: "",
    startPrice: "",
    price: "",
    discount: "",
    reserve: ""
  },
  isCocacity,
  hasDiscount,
  isBeginText,
  hasReserv,
  hasFavorit,
  isFavorite,
  showDiscountPrice,
  dontShowCircle
}) {
  const dispatch = useDispatch();
  const [isFavor, setIsFavor] = useState(isFavorite);
  const triggerFavorit = (obj) => {
    if (!isFavor) {
      dispatch(addFavoritePlace(obj));
    } else {
      dispatch(removeFavorite(obj));
    }

    setIsFavor(!isFavor);
  };
  return (
    <div className="w-full h-full flex flex-col gap-2 items-end">
      <div className={twMerge("w-full relative", classNames?.images)}>
        {hasFavorit && (
          <div className="absolute top-2 left-2 z-10">
            <Link href={"/favoritepage"} onClick={() => triggerFavorit(obj)}>
              {!isFavor && (
                <Icon
                  icon="material-symbols:favorite-outline"
                  color="white"
                  width="20"
                  fill="red"
                />
              )}
              {isFavor && (
                <Icon icon="material-symbols:favorite" color="red" width="20" />
              )}
            </Link>
          </div>
        )}
        <SwiperComponent obj={obj} images={images} aspect={classNames?.aspect} />
      </div>
      <Link
        href={{
          pathname: "/stay",
        }}
        onClick={() => dispatch(addDetailItem(obj))}
        className="w-full"
      >
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
            {isCocacity && (
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
            <div className="w-full flex items-center gap-2">
              <p className={twMerge("sm:hidden lg:flex w-[42%] flex justify-center bg-[rgb(255,245,246)] text-main-dark-red py-[1px] rounded-2xl border border-main-dark-red font-medium text-[0.75rem]", classNames?.discount)}>
                % تا {toFarsiNumber(hasDiscount)} درصد تخفیف
              </p>
             {!dontShowCircle &&
             <>
              <span className="sm:block lg:hidden text-[0.75rem] line-through text-main-silver">
                {price}
              </span>
              <p className="sm:flex lg:hidden w-[24px] h-[24px] flex items-center justify-center bg-main-dark-red text-main-white p-[2px] rounded-full  font-medium text-[0.75rem]">
                {hasDiscount}%
              </p>
             </>}
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
                  {showDiscountPrice && <span className="line-through text-main-silver sm:hidden lg:block">
                  {toFarsiNumber(price)}
                  </span>}
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
              <p className={twMerge(" w-[36%] py-[3px] flex gap-1 justify-center items-center border border-main-light-gray rounded-lg font-medium text-[0.65rem] text-main-deep-teal", classNames?.reserve)}>
                <Icon icon="ant-design:thunderbolt-filled" width="12" />
                <span>رزرو آنی و قطعی</span>
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
