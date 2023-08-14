"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./headerPages.module.css";
import LandingSearchBoxResult from "@/components/landingPage/LandingSearchBoxResult";
import { useDispatch } from "react-redux";
import { setCityReset, setTypeReset } from "@/redux/featchers/filterSlice";
import { twMerge } from "tailwind-merge";

const HeaderPagesSearch = ({
  city,
  data,
  isHome,
  classNames={body: ""}
}) => {
  const searchBoxRef = useRef(null);
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef(null);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const refInput = useRef(null);
  const ourData = [...data];
  const ourCities = [...city];
  const dispatch = useDispatch();

  const handleBoxBlur = (event) => {
    const newFocusedElement = event.relatedTarget;
    if (
      newFocusedElement &&
      boxRef.current &&
      boxRef.current.contains(newFocusedElement)
    ) {
      return;
    }
    setShowBox(false);
  };

  const handleDivClick = () => {
    setShowBox(!showBox);
  };
  useEffect(() => {
    const type = ourData.find((items) => {
      let typ = "";
      switch (items.type) {
        case "villa":
          typ = "ویلا";
          break;
        case "cottage":
          typ = "کلبه";
          break;
        case "hotel":
          typ = "هتل";
          break;
        case "ecoTourism":
          typ = "بومگردی";
          break;
        default:
          break;
      }
      if (value.includes(typ)) {
        return typ;
      }
    });
    if (type) {
      switch (type.type) {
        case "villa":
          setType("ویلا");
          break;
        case "cottage":
          setType("کلبه");
          break;
        case "hotel":
          setType("هتل");
          break;
        case "ecoTourism":
          setType("بومگردی");
          break;
        default:
          break;
      }
    } else {
      setType("");
    }
    const city = ourCities.find((items) => {
      if (value.includes(items.name)) {
        return items.name;
      }
    });
    if (city) {
      setSearchCity(city.name);
    } else {
      setSearchCity("");
    }
  }, [value]);
  const deleteInputValue = () => {
    setValue("");
    refInput.current.focus();
  };

  return (
      <div
          ref={searchBoxRef}
          onClick={handleDivClick}
          onBlur={handleBoxBlur}
          className={`flex items-center justify-center border border-[#ddd] rounded-[10px] py-[14px] px-5 sm:w-[85%] lg:w-fit lg:mr-[200px] ${styles.searchShadow}`}>
        <RiSearchLine className="text-main-light-orange ml-2"/>
        <input
            className="font-medium text-sm w-[260px] outline-none border-none"
            type="text"
            placeholder="جستجو شهر، استان یا اقامتگاه"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        {showBox && (
            <div ref={boxRef}
                 className="absolute p-4 bg-main-white w-[410px] mx-auto rounded-lg mt-4 left-1/2 top-[70px] transform translate-x-[-50%]">
              <LandingSearchBoxResult
                  city={city}
                  value={value}
                  type={type}
                  searchCity={searchCity}
              />
            </div>
        )}
      </div>
  );
};

export default HeaderPagesSearch;
