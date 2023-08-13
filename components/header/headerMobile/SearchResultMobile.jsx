"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  setCityKish,
  setCityMasal,
  setCityQeshm,
  setCityRamsar,
  setCityRasht,
  setTypeCottage,
  setTypeEcoTourism,
  setTypeHotel,
  setTypeVilla,
} from "@/redux/featchers/filterSlice";

const SearchResultMobile = ({ icon, text, type, searchCity }) => {
  const dispatch = useDispatch();
  const setTypeOnViewing = (type, city) => {
    if (type || city) {
      switch (type) {
        case "ویلا":
          if (city == "قشم") {
            dispatch(setTypeVilla());
            dispatch(setCityQeshm());
          }
          if (city == "رامسر") {
            dispatch(setTypeVilla());
            dispatch(setCityRamsar());
          }
          if (city == "کیش") {
            dispatch(setTypeVilla());
            dispatch(setCityKish());
          }
          if (city == "ماسال") {
            dispatch(setTypeVilla());
            dispatch(setCityMasal());
          }
          if (city == "رشت") {
            dispatch(setTypeVilla());
            dispatch(setCityRasht());
          }
          break;
        case "کلبه":
          if (city == "قشم") {
            dispatch(setTypeCottage());
            dispatch(setCityQeshm());
          }
          if (city == "رامسر") {
            dispatch(setTypeCottage());
            dispatch(setCityRamsar());
          }
          if (city == "کیش") {
            dispatch(setTypeCottage());
            dispatch(setCityKish());
          }
          if (city == "ماسال") {
            dispatch(setTypeCottage());
            dispatch(setCityMasal());
          }
          if (city == "رشت") {
            dispatch(setTypeCottage());
            dispatch(setCityRasht());
          }

          break;
        case "هتل":
          if (city == "قشم") {
            dispatch(setTypeHotel());
            dispatch(setCityQeshm());
          }
          if (city == "رامسر") {
            dispatch(setTypeHotel());
            dispatch(setCityRamsar());
          }
          if (city == "کیش") {
            dispatch(setTypeHotel());
            dispatch(setCityKish());
          }
          if (city == "ماسال") {
            dispatch(setTypeHotel());
            dispatch(setCityMasal());
          }
          if (city == "رشت") {
            dispatch(setTypeHotel());
            dispatch(setCityRasht());
          }

          break;
        case "بومگردی":
          if (city == "قشم") {
            dispatch(setTypeEcoTourism());
            dispatch(setCityQeshm());
          }
          if (city == "رامسر") {
            dispatch(setTypeEcoTourism());
            dispatch(setCityRamsar());
          }
          if (city == "کیش") {
            dispatch(setTypeEcoTourism());
            dispatch(setCityKish());
          }
          if (city == "ماسال") {
            dispatch(setTypeEcoTourism());
            dispatch(setCityMasal());
          }
          if (city == "رشت") {
            dispatch(setTypeEcoTourism());
            dispatch(setCityRasht());
          }

          break;
        default:
          break;
      }
    }
    switch (type) {
      case "ویلا":
        dispatch(setTypeVilla());
        break;
      case "کلبه":
        dispatch(setTypeCottage());
        break;
      case "هتل":
        dispatch(setTypeHotel());
        break;
      case "بوگردی":
        dispatch(setTypeEcoTourism());
        break;
      default:
        break;
    }
    switch (city) {
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
  };
  return (
    <Link
      onClick={() => setTypeOnViewing(type, searchCity)}
      href="/stays"
      className="flex items-center justify-start mb-4"
    >
      <div className="w-12 h-12">
        <img className="w-full" src={icon} alt="location" />
      </div>
      <div className="flex items-center justify-start mr-2">
        {!type && searchCity && (
          <p className="text-base font-medium">
            همه اقامتگاه ها در {searchCity}
          </p>
        )}
        {type && searchCity && (
          <p className="text-base font-medium">
            همه {type} ها در {searchCity}
          </p>
        )}
      </div>
    </Link>
  );
};

export default SearchResultMobile;
