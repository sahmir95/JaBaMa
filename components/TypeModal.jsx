"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypeCottage,setTypeEcoTourism,setTypeHotel,setTypeVilla,setTypeReset } from "@/redux/featchers/filterSlice";
import { AiOutlineCheckSquare,AiFillCheckSquare } from "react-icons/ai"
function TypeTool() {

  const type = useSelector((state) => state.filterSlice.type)
  const dispatch = useDispatch()

  const [active,setActive] = useState(type);

  useEffect(() => {
    setActive(type)
  },[type])

  return (
    <div className="mt-6 border-t border-main-light-gray w-full shadow-xl watcher">
      <div className="px-5 pb-4 flex flex-col items-center p-3 w-full watcher">
        <div>
          <p className="text-xl font-bold watcher">نوع اقامتگاه ها</p>
        </div>
        <div className="mt-2 flex flex-col items-start gap-y-2 text-base watcher font-medium">
          <div
            onClick={() => {
              if (active == "villa") {
                dispatch(setTypeReset());
              } else {
                dispatch(setTypeVilla());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>ویلا</p>
            <div>
              {active == "villa" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "cottage") {
                dispatch(setTypeReset());
              } else {
                dispatch(setTypeCottage());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>کلبه</p>
            <div>
              {active == "cottage" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "ecoTourism") {
                dispatch(setTypeReset());
              } else {
                dispatch(setTypeEcoTourism());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>بومگردی</p>
            <div>
              {active == "ecoTourism" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              if (active == "hotel") {
                dispatch(setTypeReset());
              } else {
                dispatch(setTypeHotel());
              }
            }}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-2 cursor-pointer watcher"
          >
            <p>هتل</p>
            <div>
              {active == "hotel" ? (
                <AiFillCheckSquare className="text-xl" />
              ) : (
                <AiOutlineCheckSquare className="text-xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeTool