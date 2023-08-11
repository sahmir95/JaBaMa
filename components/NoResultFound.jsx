"use client"

import { useDispatch, useSelector } from "react-redux"
import { reset } from "@/redux/featchers/filterSlice"

const NoResultFound = () => {

  const filter = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()

  return (
    <div className="text-center flex flex-col items-center justify-center pt-12">
      <img className="w-36" src="/images/no-result.svg" alt="head avatar" />
      <div className="w-2/3 pt-3">
        <p className="text-base font-medium text-main-deep-teal">اقامتگاهی پیدا نشد!</p>
        <p className="text-sm font-medium text-main-slate-gray">پیشنهاد ما پاک کردن فیلترها برای مشاهده ی تمامی نتایج است.</p>
      </div>
      <div className="pt-3">
        <button onClick={() => dispatch(reset())} className="rounded-2xl text-main-white bg-main-blue text-xs font-medium customButtonPad">
          پاک کردن فیلترها 
          <span className="pr-2 pl-[10px]">|</span> 
          <span>{'>'}</span>
        </button>
      </div>
    </div>
  )
}

export default NoResultFound