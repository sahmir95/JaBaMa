"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCheap,sortExpensive,sortRate,sortReset } from "@/redux/featchers/filterSlice";
import { AiOutlineCheckSquare,AiFillCheckSquare } from "react-icons/ai"
function CategoryModal() {

  const sort = useSelector((state) => state.filterSlice.sort)
  const dispatch = useDispatch()

  const [active,setActive] = useState(sort);

  useEffect(() => {
    setActive(sort)
  },[sort])

  return (
    <div className="mt-6 border-t border-main-light-gray w-full shadow-xl watcher">
      <div className="px-5 pb-4 flex flex-col items-center p-3 w-full watcher">
        <div>
          <p className="text-base font-bold watcher">
            دسته بندی
          </p>
        </div>
        <div className="mt-5 flex flex-col items-start gap-y-5 text-sm watcher">
          <div onClick={() => {
            if (active == "expensive") {
              dispatch(sortReset())
            } else {
              dispatch(sortExpensive())
            }
            }} className="flex flex-row-reverse justify-end items-center gap-x-2 p-3  watcher">
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
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-3  watcher">
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
            className="flex flex-row-reverse justify-end items-center gap-x-2 p-3  watcher">
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

export default CategoryModal