"use client";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

import SearchHelper from "@/components/header/headerMobile/SearchHelper";
import { useEffect } from "react";
import { data } from "autoprefixer";
import LandingSearchResult from "@/components/landingPage/LandingSearchResult";
import { useSelector } from "react-redux";
import SearchResultMobile from "./SearchResultMobile";

const HeaderMobile = ({ data, city }) => {
  const cityType = useSelector((state) => state.filterSlice.city);
  const [searchMenu, setSearchMenu] = useState(false);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const refInput = useRef(null);
  const ourData = [...data];
  const ourCities = [...city];
  console.log(city);
  const handleSetValue = (name) => {
    setValue(cityType);
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
    <>
      <div className="absolute top-[106px] w-full h-full overflow-y-scroll">
        <div className="bg-main-white sticky p-5 top-0 z-40">
          <div
            onClick={() => setSearchMenu(true)}
            className="flex items-center justify-start border border-b-4 shadow-md border-b-main-light-orange border-main-gainsboro rounded-lg p-4"
          >
            <FaSearch className="text-main-slate-gray ml-4" />
            <span className="font-medium text-sm text-main-slate-gray">
              جستجو شهر، استان یا اقامتگاه
            </span>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full h-full bg-main-white transition-all ease left-0 z-[999] ${
          searchMenu ? "bottom-0" : "bottom-[-100%]"
        }`}
      >
        <div className="flex items-center justify-center border-b border-main-gainsboro px-5 py-6">
          <div onClick={() => setSearchMenu(false)} className="text-lg">
            <FaArrowRight />
          </div>
          <form className="flex items-center justify-center px-6 w-full">
            <input
              type="text"
              placeholder="جستجو شهر، استان یا اقامتگاه"
              className="outline-none border-none bg-main-transparent font-medium text-sm w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              ref={refInput}
            />
          </form>
          <div>
            {value && (
              <FaCircleXmark
                onClick={deleteInputValue}
                className="text-main-slate-gray text-lg"
              />
            )}
          </div>
        </div>
        <div className="p-4">
          <SearchHelper
            title="محبوب‌ترین مقصدها"
            data={ourCities}
            handleSetValue={handleSetValue}
          />
        </div>
        {value == "" && (
          <div className="flex items-center justify-center flex-col mt-12">
            <img
              className="w-[140px] h-[140px]"
              src="/images/searchnotfound.svg"
              alt="notfound"
            />
            <span className="font-medium text-base">نتیجه‌ای پیدا نشد!</span>
          </div>
        )}
        {value && (
          <>
            {searchCity != "" && type == "" && (
              <SearchResultMobile
                icon="/images/location.png"
                searchCity={searchCity}
              />
            )}
            {searchCity != "" && type != "" && (
              <p>
                <SearchResultMobile
                  icon="/images/location.png"
                  type={type}
                  searchCity={searchCity}
                />
              </p>
            )}
            {type != "" && searchCity == "" && (
              <p className="flex flex-col gap-2">
                {city.map((items) => {
                  return (
                    <SearchResultMobile
                      icon="/images/location.png"
                      type={type}
                      searchCity={items.name}
                    />
                  );
                })}
              </p>
            )}
          </>
        )}
      </div>
      {/* {type != "" && searchCity == "" && (
              <p className="flex flex-col gap-2">
                {city.map((items) => {
                  return (
                    <span>
                      مشاهده همه {type} ها <span>در شهر {items.name}</span>
                    </span>
                  );
                })}
              </p>
            )}
            {searchCity != "" && type == "" && (
              <p>همه اقامتگاه ها در {searchCity}</p>
            )}
            {searchCity != "" && type != "" && (
              <p>
                همه {type} ها در {searchCity}
              </p>
            )} */}
    </>
  );
};

export default HeaderMobile;
