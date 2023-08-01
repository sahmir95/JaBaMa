"use client";
import BoxWithSwiper from "@/components/swiper box/BoxWithSwiper";

import React, { use, useState } from "react";

const Page = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "اجاره ویلا دوخوابه استخردار آبگرم سروستان کردان",
      type: "ویلا",
      discount: 10,
      rate: 4.2,
      comments: 79,
      HasImmediateReserve: true,
      province: "البرز",
      city: "کردان",
      images: [
        "https://cdn.jabama.com/image/890x492/jabama-images/1737810/9e7aa908-13af-4708-84a4-0442400b0ebb.jpg",
        "https://cdn.jabama.com/image/383x240/jabama-images/1479506/ace8fc11-97c4-443d-a259-5e6d317dc955.jpeg",
        "https://cdn.jabama.com/image/383x240/jabama-images/1479506/2887048f-20a3-4a82-83c8-82e839bc1727.jpeg",
        "https://cdn.jabama.com/image/383x240/jabama-images/1479506/def2c0f1-74a8-42bc-ad29-5bdc5813223d.jpeg",
        "https://cdn.jabama.com/image/383x240/jabama-images/1479506/09c679dd-6ca1-4b14-9744-ce813b5bec72.jpeg",
      ],
      host: {
        avatar:
          "https://cdn.jabama.com/image/jabama-images/image_500d6b88-93c4-4ff8-b55c-823300064bee.jpg",
        name: "مهرداد چهری",
      },
      summary: "150 متر زیربنا",
      description:
        "وشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصیشصی 4 کیلومتر استخر رو بسته",
      capacity: {
        base: 4,
        extra: 3,
      },
      price: {
        base: "2,100,000",
        extra: 200000,
      },
      bedroom: {
        rooms: 2,
        single: 0,
        double: 2,
        traditional: 4,
      },
      bathroom: {
        persianWC: 1,
        foreignWC: 0,
        shower: 1,
      },
      hasCooling: true,
      hasHeating: true,
      hasFurniture: true,
      hasTV: false,
      hasWifi: true,
      hasWater: true,
      hasElectricity: true,
      hasGas: true,
    },
  ]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BoxWithSwiper data={data[0]} />
    </div>
  );
};

export default Page;
