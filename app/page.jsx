import React from "react";

import AutoSwiper from "@/components/auto swiper/AutoSwiper";
import { getLocalData } from "@/lib/localdata";
import IconsSection from "@/components/icon section/IconsSection";
import Favplc from "@/components/favplaces/Favplc";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import LastSection from "@/components/last section home/LastSection";
import TagSection from "@/components/last section home/TagSection";
import LandingPage from "@/components/landingPage/LandingPage";
import HeaderPop from "@/components/header/headerPop/HeaderPop";
import HeaderPopDesktop from "@/components/header/headerPop/HeaderPopDesktop";
import SearchBoxLanding from "@/components/header/headerDesktop/SearchBoxLanding";
import HeaderDesktop from "@/components/header/headerDesktop/HeaderDesktop";

const Page = async () => {
  const data = await getLocalData();

  if (!data) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-4xl">
        مثل اینکه مشکلی پیش اومده
      </div>
    );
  }
  return (
    <div>
      <HeaderPop />
      <HeaderPopDesktop />
      <SearchBoxLanding />
      <HeaderDesktop />
      <LandingPage
          city={data.cities}
      />
      <div className="w-full min-h-screen flex flex-col items-center pt-[100px]">
        <AutoSwiper />
        <IconsSection />
        <div className="w-full">
          <Favplc data={data.cities} title={"محبوب ترین مقصد‌ها"} />
        </div>
        <BoxWithSwiper
          data={data.data[0].villa}
          city={data.cities[2].province}
          title="جذاب ترین ویلاها در جاباما"
          subtitle="ویلاهای استخردار واسه سفر آخر هفته"
          type={"villa"}
        >
          <CardWithSwiper isCocacity={false} showDiscountPrice={true} classNames={{
            price: "font-bold flex items-center gap-x-1 text-[0.9rem] pl-[0.15rem]"}}/>
        </BoxWithSwiper>
        <BoxWithSwiper
          data={data.data[1].hotel}
          city={data.cities[2].province}
          title="بهترین هتل ها با جاباما"
          subtitle="اقامتِ باکیفت در بهترین هتل"
          type={"hotel"}
        >
          <CardWithSwiper isCocacity={false} showDiscountPrice={true} classNames={{
            price: "font-bold flex items-center gap-x-1 text-[0.9rem] pl-[0.15rem]"}}/>
        </BoxWithSwiper>
        <BoxWithSwiper
          data={data.data[3].cottage}
          city={data.cities[2].province}
          title="کلبه‌های خاص"
          subtitle="کلبه‌هلی مثلثی و چوبی"
          type={"cottage"}
        >
          <CardWithSwiper isCocacity={false} showDiscountPrice={true} classNames={{
            price: "font-bold flex items-center gap-x-1 text-[0.9rem] pl-[0.15rem]"}}/>
        </BoxWithSwiper>
        <LastSection />
        <TagSection data={data.data[0].villa} />
      </div>
    </div>
  );
};

export default Page;
