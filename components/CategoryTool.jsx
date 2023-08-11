"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCheap,sortExpensive,sortRate,sortReset } from "@/redux/featchers/filterSlice";
import { AiOutlineCheckSquare,AiFillCheckSquare } from "react-icons/ai"
function CategoryTool() {

  const sort = useSelector((state) => state.filterReducer.sort)
  const dispatch = useDispatch()

  const [active,setActive] = useState(sort);

  useEffect(() => {
    setActive(sort)
  },[sort])

  return (
    <div className="w-full shadow-xl watcher">
      <div className="px-5 pb-4 flex flex-col items-center p-3 w-full watcher">
        <div>
          <p className="text-base font-bold watcher">
            دسته بندی
          </p>
        </div>
        <div className="mt-2 flex flex-col items-start gap-y-1 text-xs w-full watcher font-medium">
          <div onClick={() => {
            if (active == "expensive") {
              dispatch(sortReset())
            } else {
              dispatch(sortExpensive())
            }
            }} className="flex flex-row-reverse justify-end items-center gap-x-2 p-1 w-2/3 watcher cursor-pointer">
            <p>
براساس گران ترین
            </p>
            <div>
            {active == "expensive" ? <AiFillCheckSquare className="text-xl"/> : <AiOutlineCheckSquare className="text-xl"/>}
            </div>
          </div>
          <div onClick={() => {
            if (active == "cheap") {
              dispatch(sortReset())
            } else {
              dispatch(sortCheap())
            }}}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-1 w-2/3 watcher cursor-pointer">
            <p>
بر اساس ارزان تریت
            </p>
            <div>
            {active == "cheap" ? <AiFillCheckSquare className="text-xl"/> : <AiOutlineCheckSquare className="text-xl"/>}
            </div>
          </div>
          <div onClick={() => {
            if (active == "rate") {
              dispatch(sortReset())
            } else {
              dispatch(sortRate())
            }}}
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-1 w-2/3 watcher cursor-pointer">
            <p>
بر اساس امتیاز
            </p>
            <div>
            {active == "rate" ? <AiFillCheckSquare className="text-xl"/> : <AiOutlineCheckSquare className="text-xl"/> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryTool