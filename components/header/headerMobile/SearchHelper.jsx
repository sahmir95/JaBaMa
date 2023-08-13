"use client";
import React from "react";
import SearchItem from "@/components/header/headerMobile/SearchItem";
import styles from "./searchHelper.module.css";

const SearchHelper = ({ data, title, handleSetValue }) => {
  const cities = ["قشم", "کیش", "ماسال", "رامسر", "رشت"];
  return (
    <div className="mb-4">
      <h2 className="font-medium text-main-slate-gray text-xs mb-4">{title}</h2>
      <div className={`flex gap-2 ${styles.scrollHorizontal}`}>
        {cities.map((item, index) => (
          <SearchItem
            key={index + 1}
            name={item}
            handleSetValue={handleSetValue}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchHelper;
