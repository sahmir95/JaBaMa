"use client";
import React, { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import styles from "./headerPages.module.css";

const HeaderPages = () => {
  const [value, setValue] = useState();

  return (
    <div className="border-b border-b-main-light-gray">
      <div
        className={`sm:hidden md:hidden lg:flex items-center justify-between mx-auto w-full h-20 max-w-[1400px] px-4 z-40`}
      >
        <div className="flex items-center justify-start">
          <a href="https://www.jabama.com/">
            <img src="/images/color-logo.svg" alt="logo" />
          </a>
        </div>
        <div
          className={`flex items-center justify-center border border-[#ddd] rounded-[10px] py-[14px] px-5 mr-[200px] ${styles.searchShadow}`}
        >
          <RiSearchLine className="text-main-light-orange ml-2" />
          <input
            className="font-medium text-sm w-[260px] outline-none border-none"
            type="text"
            placeholder="جستجو شهر، استان یا اقامتگاه"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center justify-center cursor-pointer ml-9 px-5 py-[13px] border border-main-light-gray rounded-lg">
            <HiOutlineHeart className="text-main-black text-xl ml-2" />
            <span className="text-main-black font-medium text-sm">
              مورد علاقه‌ها
            </span>
          </div>
          <div className="flex items-center justify-center cursor-pointer bg-[#fafafa] px-5 py-3 rounded-lg">
            <img
              className="w-6 rounded-full"
              src="/images/userIcon.svg"
              alt="user"
            />
            <span className="font-medium text-sm mr-2">گروه سوم</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;
