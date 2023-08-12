import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import Link from "next/link";

const HeaderPages = ({
  display,
  border,
  loc,
  compFilter,
  compSearch,
  background,
  position,
}) => {
  return (
    <div
      className={`hidden lg:${display} h-fit ${background} ${position} ${border} ${loc} z-[60]`}
    >
      <div className="max-w-[1400px] flex flex-col mx-auto">
        <div
          className={`flex items-center justify-between mx-auto w-full h-20 px-4 z-40`}
        >
          <div className="flex items-center justify-start">
            <Link href="/">
              <img src="/images/color-logo.svg" alt="logo" />
            </Link>
          </div>
          {compSearch}
          <div className="flex items-center justify-end">
            <Link href="/favorites" className="flex items-center justify-center cursor-pointer ml-5 px-5 py-[13px] border border-main-light-gray rounded-lg">
              <HiOutlineHeart className="text-main-black text-xl ml-2" />
              <span className="text-main-black font-medium text-sm">
                مورد علاقه‌ها
              </span>
            </Link>
            <Link href="/trips" className="flex items-center justify-center cursor-pointer bg-[#fafafa] px-5 py-3 rounded-lg">
              <span className="font-medium text-sm mr-2">سفرهای من</span>
            </Link>
          </div>
        </div>
        {compFilter}
      </div>
    </div>
  );
};

export default HeaderPages;