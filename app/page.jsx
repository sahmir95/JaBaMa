import AutoSwiper from "@/components/auto swiper/AutoSwiper";
import React from "react";
import { getLocalData } from "@/lib/localdata";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import IconsSection from "@/components/icon section/IconsSection";

const data = await getLocalData();

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <AutoSwiper />
      <IconsSection />
      <BoxWithSwiper data={data.data[0].vila}>
        <CardWithSwiper />
      </BoxWithSwiper>
    </div>
  );
};

export default Page;
