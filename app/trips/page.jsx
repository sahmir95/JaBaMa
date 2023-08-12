"use client";
import React, { useState } from "react";
import Sidbar from "@/components/sidebar/Sidbar";
import TitlePage from "@/components/titlepage/TiTlePage";
import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import HeaderMobilePages from "@/components/header/headerMobile/HeaderMobilePages";

const MyTrips = ({ data }) =>{
    return (
        <>
          <HeaderPages
            display="block"
            loc=""
            border="border-b border-b-main-light-gray"
            compFilter=""
        />
        <HeaderMobilePages title= "سفرهای من"/>
          <div>
            {favorite.length > 0 ? (
              <div className="flex ">
                <div className="hidden lg:block w-1/4 mb-10">
                  <Sidbar />
                </div>
                <div className="w-full lg:w-3/4  ">
                    <div className="hidden lg:block lg:w-full lg:mr-4">
                      <TitlePage title="سفرهای من" />
                    </div>
                  <div>
                    <div className="w-full flex sm:flex-wrap">
                      {favorite.map((item) => {
                        return (
                          <div className="gap-4 pt-5 mr-5">
                            <p className="">{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-start">
                <div className="hidden lg:inline lg:mb-10">
                  <Sidbar />
                </div>
                <div className="w-full lg:w-3/4 ">
                    <div className="w-full hidden lg:block lg:mr-4 ">
                      <TitlePage title="سفرهای من" />
                    </div>
                  <div className="flex flex-col items-center justify-center pt-20">
                    <img
                      className="w-3/4 lg:w-1/3 md:w-1/3 mb-4 lg:mr-4"
                      src="https://cdn.jabama.com/original/statics/mobile/img/trips-empty-state.fc2770b.svg"
                      alt=""
                    />
                    <div className="lg:w-2/3 text-center ">
                      <p className="font-light text-base text-main-slate-gray mt-2">
                        درحال حاضر هیچ{" "}
                        <strong className="text-main-deep-teal font-bold">
                          سفر فعالی
                        </strong>{" "}
                       ندارید.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      );
}
export default MyTrips;