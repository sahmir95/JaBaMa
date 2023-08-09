"use client";
import React, { useState } from "react";
import Sidbar from "@/components/sidebar/Sidbar";
import TitlePage from "@/components/titlepage/TiTlePage";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";

const FavoritePage = () => {
  const favorite = useSelector((state) => state.favoriteSlice.favorite);

  return (
    <div>
      {favorite.length > 0 ? (
        <div>
          <div className="flex items-center justify-center">
            <TitlePage title="مورد علاقه ها" />
          </div>
          <div className="flex sm:flex-col gap-4 sm:p-5 ">
            {favorite.map((item) => {
              return (
                <CardWithSwiper
                  obj={item}
                  rate={item.rate}
                  comments={item.comments}
                  title={item.title}
                  province={item.province}
                  city={item.city}
                  price={item.price.base || 0}
                  images={item.images}
                  bedroom={item.bedroom.rooms}
                  capacity={item.capacity}
                  hasDiscount={item.discount}
                  isCocacity={true}
                  hasFavorit={true}
                  isFavorite={true}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="hidden lg:block w-1/4">
            <Sidbar />
          </div>
          <div className="w-full lg:w-3/4 p-4">
            <TitlePage title="مورد علاقه ها" />
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-3/4 lg:w-1/3 md:w-1/3 mb-4 lg:mr-4"
                src="https://cdn.jabama.com/original/statics/mobile/img/favorites-empty-state.5eacc43.svg"
                alt=""
              />
              <div className="lg:w-2/3 text-center">
                <p className="font-light text-base text-main-slate-gray mt-2">
                  لیست اقامتگاه‌های{" "}
                  <strong className="text-main-deep-teal font-bold">
                    مورد علاقه شما
                  </strong>{" "}
                  خالی است.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
