"use client";
import {
  setTypeCottage,
  setTypeEcoTourism,
  setTypeHotel,
  setTypeVilla,
} from "@/redux/featchers/filterSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

const IconsSection = () => {
  const dispatch = useDispatch();
  const setTypeOnViewing = (type) => {
    switch (type) {
      case "villa":
        dispatch(setTypeVilla());
        break;
      case "cottage":
        dispatch(setTypeCottage());
        break;
      case "hotel":
        dispatch(setTypeHotel());
        break;
      case "ecoTourism":
        dispatch(setTypeEcoTourism());
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full px-[20px]  h-auto flex flex-col lg:hidden items-center">
      <div className="w-full flex justify-between pt-[8%] px-[8%]">
        <Link
          onClick={() => setTypeOnViewing("villa")}
          href={"/stays"}
          className="w-[48px] md:w-[64px] flex flex-col justify-center items-center"
        >
          <img className="" src="/images/Vila.png" alt="ویلا" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">ویلا</p>
        </Link>
        <Link
          onClick={() => setTypeOnViewing("cottage")}
          href={"/stays"}
          className="w-[48px] md:w-[64px] flex flex-col justify-center items-center"
        >
          <img className="aspect-square" src="/images/Kolbe.png" alt="کلبه" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">کلبه</p>
        </Link>
        <Link
          onClick={() => setTypeOnViewing("ecoTourism")}
          href={"/stays"}
          className="w-[48px] md:w-[64px] flex flex-col justify-center items-center"
        >
          <img className="w-full" src="/images/Bumgardi.png" alt="بوگردی" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">بوگردی</p>
        </Link>
        <Link
          onClick={() => setTypeOnViewing("hotel")}
          href={"/stays"}
          className="w-[48px] md:w-[64px] flex flex-col justify-center items-center"
        >
          <img className="aspect-square" src="/images/Hotel.png" alt="هتل" />
          <p className="font-medium text-[0.75rem] md:text-[0.9rem]">هتل</p>
        </Link>
      </div>
    </div>
  );
};

export default IconsSection;
