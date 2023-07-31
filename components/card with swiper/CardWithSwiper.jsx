"use client";
import { Icon } from "@iconify/react";
import SwiperComponent from "../swiperComponent/Swiper";

export default function CardWithSwiper() {
  const SliderData = [
    {
      image:
        "https://cdn.jabama.com/image/jabama-images/972432/ad055fd7-7766-4699-b0fe-52333b26b62e.jpg",
    },
    {
      image:
        "https://cdn.jabama.com/image/jabama-images/972432/4430e19a-8bd3-4571-b768-e91ab4662b9f.jpg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="sm:w-[70%] md:w-[22.5%] h-full flex flex-col gap-2 items-end">
      <SwiperComponent images={SliderData} />
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex  items-center gap-1">
          <Icon icon="ic:round-star" width="14" heigth="14" color="gold" />
          <p className="font-medium text-[10px]">{"۳.۹"}</p>
          <p className="font-light text-[10px] text-right">{"(60 دیدگاه)"}</p>
        </div>
        <p className="w-full font-medium text-sm text-right">
          آپارتمان فلت شاین نارمک
        </p>
        <p className="w-full font-medium text-[10px] text-right text-main-slate-gray">
          <span> استان تهران،</span>
          <span> تهران</span>
        </p>
        <p className="w-full font-medium text-[10px] flex  text-main-slate-gray">
          <p className=" font-medium text-[12px] text-main-black">
            84000 تومان
          </p>
          <span>/هرشب</span>
        </p>
      </div>
    </div>
  );
}
