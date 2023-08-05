"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import toFarsiNumber from "@/utils/toFaNumber";
import SearchOptions from "@/components/SearchOptions";
import CardWithSwiper from "@/components/card with swiper/CardWithSwiper";
import Modal from "@/components/Modal";
import { useDispatch, useSelector } from "react-redux";

function StayPage({ stays }) {

  const router = useRouter()

  const filter = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()


  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <>
    <div className="flex flex-col py-3 border-b border-main-light-silver sticky">
      <div className="pr-3 mb-3 pl-5 h-11 flex items-center">
        <div onClick={handleBack} className="px-2 flex justify-center items-center">
            <img className="h-3" src="/images/right-arrow.svg" alt="arrow" />
        </div>
        <div className="bg-main-lightish-gray p-3 w-full">
          {/* <Search />   */}
          <div>
            <span>search {filter.people}</span>
          </div>
        </div>
      </div>
      <div className="font-medium text-xs">
        <SearchOptions/>
      </div>
    </div>
    <div className="px-5">
      <div className="pt-[1.45rem] pb-[0.6rem]">
        <p className="mb-1 font-bold text-main-deep-teal">{`اجاره `}</p>
        <p className="mt-2 font-medium text-xs text-main-slate-gray">{`${toFarsiNumber(stays.length)} اقامتگاه`}</p>
      </div>
      <div className="mt-4">
          {stays?.length >= 1 &&
          stays.map((stay) => {
              return (
              <div key={stay.id} className="pb-6">
                  <CardWithSwiper
                    price={stay?.price?.base}
                    rate={stay?.rate}
                    comments={stay?.comments}
                    title={stay?.title}
                    city={stay?.city}
                    classNames={{
                      images: "sm:aspect-[8/5] sm:h-fit",
                      rate: "text-xs font-bold pl-[0.1rem]",
                      comment: 'text-xs',
                      title: "",
                      middle: "text-xs",
                      startPrice: "sm:inline text-xs",
                      bottom: "text-xs",
                      price: "font-bold text-[0.9rem]",
                    }}
                    province={stay?.province}
                    images={stay?.images}
                    capacity={stay?.capacity}
                  />
              </div>
              );
          })}
      </div>
    </div>
  </>
  )
}

export default StayPage