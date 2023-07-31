import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";

import React from "react";

const Page = () => {
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
    <div className="w-full h-screen flex justify-center items-center">
      <BoxWithSwiper images={SliderData} />
    </div>
  );
};

export default Page;
