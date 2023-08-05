"use client";
import React, { useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoCloseCircleSharp } from "react-icons/io5";
import AutoSwiper from "@/components/auto swiper/AutoSwiper";
import { getLocalData } from "@/lib/localdata";
import IconsSection from "@/components/icon section/IconsSection";
import Favplc from "@/components/favplaces/Favplc";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import LastSection from "@/components/last section home/LastSection";
import TagSection from "@/components/last section home/TagSection";

const data = await getLocalData();

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <section className="sm:hidden md:hidden lg:block relative">
        <section className="sm:hidden md:hidden lg:block relative">
          <div className="shadowHeader">
            <img
              className="w-full h-full imageRendering object-cover"
              src="/images/background.jpg"
              alt="bg"
            />
          </div>
          <div className="absolute inset-0 max-w-[1400px] mx-auto pt-[120px] px-4">
            <div className="flex items-center justify-between pl-4 border border-main-white rounded-lg w-fit mx-auto bg-main-white">
              <label
                className="flex items-center justify-center p-4 cursor-pointer"
                htmlFor="search"
              >
                <div className="flex items-start justify-center flex-col pl-20">
                  <span className="font-medium text-xs">
                    جستجو شهر، استان یا اقامتگاه
                  </span>
                  <input
                    className="border-none outline-none font-medium text-sm mt-3"
                    type="text"
                    placeholder="انتخاب مقصد"
                    id="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ref={refInput}
                  />
                </div>
                <div className="flex items-center justify-center w-[40px] h-[40px]">
                  {value && (
                    <div className="p-2">
                      <IoCloseCircleSharp
                        onClick={closeHandler}
                        className="text-xl text-main-silver hover:text-main-slate-gray"
                      />
                    </div>
                  )}
                </div>
              </label>
              <span className="bg-main-light-gray h-9 w-[1px] ml-6"></span>
              <button className="bg-main-black rounded-lg p-3">
                <HiOutlineSearch className="text-main-white text-2xl" />
              </button>
            </div>
            <div className="flex items-start justify-center flex-col h-full pb-[130px]">
              <h5 className="font-medium text-sm text-main-white">
                اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران
              </h5>
              <span className="font-medium text-lg text-main-white mt-2">
                پیشنهادهای جاباما برای سفرهای تابستانی
              </span>
              <h4 className="font-medium text-[26px] text-main-white">
                سفر از تو، جاباما
              </h4>
              <div className="flex items-center justify-center bg-main-white rounded-lg px-4 py-2 mt-3 w-fit">
                <a className="font-medium text-sm text-main-black" href="#">
                  مشاهده اقامتگاه‌ها
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:hidden md:hidden lg:block relative">
          <div className="absolute top-1/2 right-1/2 transformIcon flex items-center justify-center gap-16 rounded-lg w-fit mx-auto py-5 px-20 bg-main-white shadowBox">
            <a
              className="flex items-center justify-center flex-col px-4"
              href="#"
            >
              <img className="w-[72px]" src="/images/Vila.png" alt="ویلا" />
              <span className="font-medium text-lg">ویلا</span>
            </a>
            <a
              className="flex items-center justify-center flex-col px-4"
              href="#"
            >
              <img className="w-[72px]" src="/images/Kolbe.png" alt="کلبه" />
              <span className="font-medium text-lg">کلبه</span>
            </a>
            <a
              className="flex items-center justify-center flex-col px-4"
              href="#"
            >
              <img
                className="w-[72px]"
                src="/images/Bumgardi.png"
                alt="بومگردی"
              />
              <span className="font-medium text-lg">بومگردی</span>
            </a>
            <a
              className="flex items-center justify-center flex-col px-4"
              href="#"
            >
              <img className="w-[72px]" src="/images/Hotel.png" alt="هتل" />
              <span className="font-medium text-lg">هتل</span>
            </a>
          </div>
        </section>
      </section>
      <AutoSwiper />
      <IconsSection />
      <div className="w-full">
        <Favplc data={data.cities} title={"محبوب ترین مقصد‌ها"} />
      </div>
      <BoxWithSwiper
        data={data.data[0].vila}
        city={data.cities[2].province}
        title="جذاب ترین ویلاها در جاباما"
        subtitle="ویلاهای استخردار واسه سفر آخر هفته"
      >
        <CardWithSwiper isCocacity={false} />
      </BoxWithSwiper>
      <BoxWithSwiper
        data={data.data[1].hotel}
        city={data.cities[2].province}
        title="بهترین هتل ها با جاباما"
        subtitle="اقامتِ باکیفت در بهترین هتل"
      >
        <CardWithSwiper isCocacity={false} />
      </BoxWithSwiper>
      <BoxWithSwiper
        data={data.data[3].cottage}
        city={data.cities[2].province}
        title="کلبه‌های خاص"
        subtitle="کلبه‌هلی مثلثی و چوبی"
      >
        <CardWithSwiper isCocacity={false} />
      </BoxWithSwiper>
      <LastSection />
      <TagSection data={data.data[0].vila} />
    </div>
  );
};
