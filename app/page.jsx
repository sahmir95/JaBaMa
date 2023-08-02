import AutoSwiper from "@/components/auto swiper/AutoSwiper";
import React from "react";
import { getLocalData } from "@/lib/localdata";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";

const data = await getLocalData();

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <AutoSwiper />
      <div className="w-full px-[20px]  h-auto flex flex-col items-center">
        <div className="w-full flex justify-between pt-[8%]">
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="" src="/images/Vila.png" alt="ویلا" />
            <p className="font-medium text-[0.75rem]">ویلا</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-full" src="/images/Kolbe.png" alt="کلبه" />
            <p className="font-medium text-[0.75rem]">کلبه</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-[48px]" src="/images/Bumgardi.png" alt="بوگردی" />
            <p className="font-medium text-[0.75rem]">بوگردی</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-[48px]" src="/images/Hotel.png" alt="هتل" />
            <p className="font-medium text-[0.75rem]">هتل</p>
          </div>
        </div>
        <div className="w-full flex justify-between pt-[8%]">
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="" src="/images/Vila.png" alt="ویلا" />
            <p className="font-medium text-[0.75rem]">ویلا</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-full" src="/images/Kolbe.png" alt="کلبه" />
            <p className="font-medium text-[0.75rem]">کلبه</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-[48px]" src="/images/Bumgardi.png" alt="بوگردی" />
            <p className="font-medium text-[0.75rem]">بوگردی</p>
          </div>
          <div className="w-[48px] flex flex-col justify-center items-center">
            <img className="w-[48px]" src="/images/Hotel.png" alt="هتل" />
            <p className="font-medium text-[0.75rem]">هتل</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto my-[200px] pr-4">
        <BoxWithSwiper data={data.data[0].vila} city={data.cities[0].name}>
          <CardWithSwiper />
        </BoxWithSwiper>
      </div>
    </div>
  );
};

export default Page;
