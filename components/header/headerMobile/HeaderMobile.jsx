"use client";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import SearchHelper from "@/components/header/headerMobile/SearchHelper";
import { useEffect } from "react";
import { data } from "autoprefixer";

const HeaderMobile = ({ data, city }) => {
  const [searchMenu, setSearchMenu] = useState(false);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const refInput = useRef(null);
  const ourData = [...data];
  const ourCities = [...city];
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
    <div className="p-5 relative top-0">
      <div
        onClick={() => setSearchMenu(true)}
        className="flex items-center justify-start border border-b-4 shadow-md border-b-main-light-orange border-main-gainsboro rounded-lg p-4"
      >
        <FaSearch className="text-main-slate-gray ml-4" />
        <span className="font-medium text-sm text-main-slate-gray">
          جستجو شهر، استان یا اقامتگاه
        </span>
      </div>
      <div
        className={`fixed w-full h-full bg-main-white transition-all ease left-0 z-50 ${
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
        <div className="px-4">
          <h2 className="font-medium text-main-slate-gray text-xs mb-4 mt-6">
            آخرین جستوجوها
          </h2>
          <div className="border border-main-gainsboro rounded-[20px] w-fit py-3 px-5 font-medium text-xs">
            کردان
          </div>
          <SearchHelper title="محبوب‌ترین مقصدها" data={city} />
        </div>
        {value && (
          <div>
            {type != "" && searchCity == "" && (
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
