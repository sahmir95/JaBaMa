"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  setCityMasal,
  setCityQeshm,
  setCityRasht,
  setCityRamsar,
  setCityKish,
  setTypeReset,
} from "@/redux/featchers/filterSlice";

const SearchItem = ({ name, handleSetValue }) => {
  const dispatch = useDispatch();
  const handleSearchCity = (name) => {
    switch (name) {
      case "ماسال":
        dispatch(setCityMasal());
        break;
      case "قشم":
        dispatch(setCityQeshm());
        break;
      case "رشت":
        dispatch(setCityRasht());
        break;
      case "رامسر":
        dispatch(setCityRamsar());
        break;
      case "کیش":
        dispatch(setCityKish());
        break;
      default:
        break;
    }
    dispatch(setTypeReset());
    handleSetValue(name);
  };
  return (
    <Link
      href="/stays"
      onClick={() => handleSearchCity(name)}
      className="border border-main-gainsboro rounded-[20px] w-fit py-3 px-5 font-medium text-xs h-fit hover:bg-main-light-gray"
    >
      {name}
    </Link>
  );
};

export default SearchItem;
