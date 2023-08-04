import AutoSwiper from "@/components/auto swiper/AutoSwiper";
import React from "react";
import { getLocalData } from "@/lib/localdata";
import IconsSection from "@/components/icon section/IconsSection";
import Favplc from "@/components/favplaces/Favplc";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";

const data = await getLocalData();

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <section className="sm:hidden md:hidden lg:block relative">
        <div className="shadowHeader">
          <img
            className="w-full h-full imageRendering object-cover"
            src="/images/background.jpg"
            alt="bg"
          />
        </div>
      </section>
      <AutoSwiper />
      <IconsSection />
      <div className="w-full">
        <Favplc data={data.cities} title={"محبوب ترین مقصد‌ها"} />
      </div>
      <BoxWithSwiper
        data={data.data[0].vila}
        city={data.cities[2].province}
        title="جذاب ترین ویلاها در مازندران"
        subtitle="ویلاهای استخردار واسه سفر آخر هفته"
      >
        <CardWithSwiper isCocacity={false} />
      </BoxWithSwiper>
    </div>
  );
};

export default Page;
