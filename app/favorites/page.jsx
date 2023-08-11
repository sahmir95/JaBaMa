"use client";
import React, { useState } from "react";
import Sidbar from "@/components/sidebar/Sidbar";
import TitlePage from "@/components/titlepage/TiTlePage";
import { useSelector } from "react-redux";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import './style.css'

const FavoritePage = () => {
  const data = useSelector((state) => state.favoriteSlice.favorite);
  const [favorite, setfavorite] = useState([]);

  return (
    <div className=" container"> 
    
      <div >
        {data.length > 0 ? (
          <div className="w-full h-auto flex pb-[58px]">
            <div className="hidden lg:block mb-10 mr-5 lg:w-72">
              <Sidbar />
            </div>
            <div className="w-full h-full lg:w-2/4 mx-1">
              <div className="w-full h-auto">
              <div className="hidden lg:block  ">
                <TitlePage title="مورد علاقه ها" />
              </div>
                <div className="w-full h-full grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-2 gap-3 sm:pt-[50px] lg:pt-4">
                  {data.map((item) => {
                    return (
                      <CardWithSwiper
                        obj={item}
                        rate={item.rate}
                        comments={item.comments}
                        title={item.title}
                        images={item.images}
                        city={item.city}
                        province={item.province}
                        price={item.price.base}
                        bedroom={item.bedroom.rooms}
                        capacity={item.capacity}
                        isCocacity={true}
                        hasDiscount={item.discount}
                        isBeginText={true}
                        hasReserv={item.HasImmediateReserve}
                        hasFavorit={true}
                        isFavorite={true}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="hidden lg:block w-1/4 mb-10">
              <Sidbar />
            </div>
            <div className="w-full lg:w-3/4 h-3/4 ">
              <div className="hidden lg:block mr-8 ">
                <TitlePage title="مورد علاقه ها" />
              </div>
              <div className="flex flex-col items-center justify-center pt-20 ">
                <img
                  className="w-3/4 lg:w-1/3 md:w-1/3 mb-4 lg:mr-4"
                  src="https://cdn.jabama.com/original/statics/mobile/img/favorites-empty-state.5eacc43.svg"
                  alt=""
                />
                <div className="lg:w-3/3 text-center">
                  <p className="font-light w-[240px] md:w-[400px] text-base text-main-slate-gray mt-2">
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
    </div>
  );
};

export default FavoritePage;
