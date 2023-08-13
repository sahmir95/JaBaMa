"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./headerPages.module.css";

const HeaderPagesSearch = () => {
  const [value, setValue] = useState("");

  return (
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
  );
};

export default HeaderPagesSearch;
