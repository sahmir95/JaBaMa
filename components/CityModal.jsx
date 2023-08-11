"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCityKish,
  setCityMasal,
  setCityQeshm,
  setCityRamsar,
  setCityRasht,
  setCityReset
} from "@/redux/featchers/filterSlice";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";
function CityTool() {
  const city = useSelector((state) => state.filterSlice.city);
  const dispatch = useDispatch();

  const [active, setActive] = useState(city);

  useEffect(() => {
    setActive(city);
  }, [city]);

  return (
    <div className="mt-6 border-t border-main-light-gray w-full shadow-xl watcher">
      <div className="px-5 pb-4 flex flex-col items-center p-3 w-full watcher">
        <div>
          <p className="text-xl font-bold watcher">شهر ها</p>
        </div>
        <div className="mt-2 flex flex-col items-start gap-y-3 text-base py-4 font-medium">
          <div
            onClick={() => {
              if (active == "ماسال") {
                dispatch(setCityReset());
              } else {
                dispatch(setCityMasal());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>ماسال</p>
            <div>
              {active == "ماسال" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "قشم") {
                dispatch(setCityReset());
              } else {
                dispatch(setCityQeshm());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>قشم</p>
            <div>
              {active == "قشم" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "رشت") {
                dispatch(setCityReset());
              } else {
                dispatch(setCityRasht());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>رشت</p>
            <div>
              {active == "رشت" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "رامسر") {
                dispatch(setCityReset());
              } else {
                dispatch(setCityRamsar());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>رامسر</p>
            <div>
              {active == "رامسر" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "کیش") {
                dispatch(setCityReset());
              } else {
                dispatch(setCityKish());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>کیش</p>
            <div>
              {active == "کیش" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityTool;
