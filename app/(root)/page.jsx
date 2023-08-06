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
import HeaderLanding from "@/components/header/HeaderLanding";
import HeaderDesktop from "@/components/header/HeaderDesktop";

const data = await getLocalData();

const Page = () => {
  return (
      <div>
          <HeaderPop display="lg:hidden" img="/images/notifBanner.jpg"/>
          <HeaderPopDesktop display="lg:block" img="/images/notifBannerDesktop.jpg"/>
          <HeaderLanding display="lg:hidden"/>
          <HeaderDesktop display="lg:flex"/>
          <LandingPage />
          <div className="w-full min-h-screen flex flex-col items-center">
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
      </div>
  );
};

export default Page;
