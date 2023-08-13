"use client";
import "../globals.css";
import { ReadMoreLink } from "@/components/ReadMore/ReadMore";
import { Facility } from "@/components/facilities/Facility";
import "../../public/images/clock.png";
import "./page.css";
import { RulesComponent } from "@/components/rulesComponent/RulesComponent";
import { CommentsComponent } from "@/components/commentsComponent/CommentsComponent";
import SwiperDetailPage from "../../components/swiperDetailPageComponent/SwiperDetailPage";
import React from "react";
import { useSelector } from "react-redux";
import ButtonFav from "@/components/buttonfav/ButtonFav";
import { ImageDetailComponent } from "@/components/imageDetailComponent/ImageDetailComponent";
import { ReservationBox } from "@/components/ReservationBox/ReservationBox";
import { DiscountCondition } from "@/components/detailCondition/DiscountCondition";
import { AvatarCondition } from "@/components/detailCondition/AvatarCondition";
import { ImmediateReservation } from "@/components/detailCondition/ImmediateReservation";
import { BedroomCondition } from "@/components/detailCondition/BedroomCondition";
import { BathroomCondition } from "@/components/detailCondition/BathroomCondition";
import toFarsiNumber from "@/utils/toFaNumber";
import { comment } from "postcss";

export default function Detail() {
  const detailData = useSelector((state) => state.detailSlice.detailData);
  const data = detailData;

  const engToFaType = (type) => {
    switch (type) {
      case "villa":
        return "ویلا";
      case "hotel":
        return "هتل";
      case "ecoTourism":
        return "بومگردی";
      case "cottage":
        return "کلبه";
      default:
        break;
    }
  };

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full inline relative lg:hidden">
        <SwiperDetailPage images={data.images} id={data.id} />
        <div className="w-full flex justify-center items-center">
          <button className="w-[50px] bg-[#fafafa]"></button>
          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className="w-full px-[20px] flex justify-center items-center flex-col lg:mt-[20px]">
        <div className="w-full font-light flex justify-center items-center lg:flex lg:justify-between">
          <div className="lg:flex lg:justify-start lg:items-start lg:flex-col">
            <h1 className="text-center font-medium text-lg lg:text-[1rem] ">
              {data.title}
            </h1>
            <div className="font-light flex justify-center items-center flex-col mt-5 text-xs gap-1 lg:flex-row lg:gap-[4px]">
              <div className="flex justify-center items-center gap-x-[4px]">
                <div className="flex justify-center items-center gap-x-1 ">
                  <img
                    className="w-3 h-3"
                    src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png"
                    alt="star--v1"
                  />
                  <div className="font-medium text-[0.7rem] lg:text-[0.9rem]">
                    {toFarsiNumber(data.rate)}
                  </div>
                  <a className="underline font-medium text-main-slate-gray lg:text-[0.85rem]">
                    {/* ({toFarsiNumber(comment.length)} نظر ثبت شده) */}
                  </a>
                </div>
                <p className="text-lg lg:text-[0.85rem]">.</p>
                <div className="flex justify-center items-center gap-1">
                  <img
                    className="w-3 h-3"
                    src="https://img.icons8.com/fluency-systems-filled/48/FAB005/marker.png"
                    alt="marker"
                  />
                  <a className="underline font-medium text-main-slate-gray lg:text-[0.85rem]">
                    {data.province},{data.city}
                  </a>
                </div>
                <p className="hidden text-lg lg:inline">.</p>
              </div>
              <DiscountCondition data={data} />
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-around lg:items-center">
            <ButtonFav />
          </div>
        </div>
        <div className="hidden lg:inline">
          <ImageDetailComponent data={data} />
        </div>
        <div className="w-full h-[1px] bg-main-light-gray mt-[20px] lg:hidden"></div>
        <div className="w-full flex justify-between items-start lg:relative lg:mt-[40px]">
          <div className="w-full lg:w-[68%]">
            <div className="w-full mt-[20px] flex justify-between items-center">
              <div className="w-[74%]">
                <div className="w-full font-bold">{engToFaType(data.type)}</div>
                <div className="w-full font-medium text-[0.9rem] text-right text-main-black lg:text-[0.85rem]">
                  اجاره {engToFaType(data.type)} در {data.city} به میزبانی{" "}
                  {data.host.name}
                </div>
              </div>
              <AvatarCondition data={data} />
            </div>
            <ImmediateReservation data={data} />
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px] lg:mt-[32px]"></div>
            <div className="w-full flex justify-start items-start flex-col mt-[20px]">
              <div>
                <h2 className="font-bold text-[1rem]">
                  مشخصات کلی {engToFaType(data.type)}
                </h2>
              </div>
              <div className="mt-[20px] flex flex-col justify-around items-center gap-y-[20px]">
                <div className="w-full flex justify-start items-center gap-x-[10px]">
                  <div>
                    <img
                      className="w-[25] h-[25px]"
                      src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-line-wedding-tanah-basah-basic-outline-tanah-basah-27.png"
                      alt="thunder"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-[0.9rem]">
                      درباره {engToFaType(data.type)}
                    </p>
                    <p className="font-light text-[0.75rem]">{data.summary}</p>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-x-[10px]">
                  <div>
                    <img
                      className="w-[25px] h-[25px]"
                      src="https://img.icons8.com/ios/50/user-group-man-man.png"
                      alt="capacity"
                    />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-[0.9rem]">ظرفیت</p>
                    <p className="font-light text-[0.75rem]">
                      ظرفیت تا{" "}
                      {toFarsiNumber(data.capacity.base + data.capacity.extra)}{" "}
                      ({toFarsiNumber(data.capacity.base)} نفر پایه + تا{" "}
                      {toFarsiNumber(data.capacity.extra)} نفر اضافه)
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-x-[10px]">
                  <div>
                    <img
                      className="w-[25px] h-[25px]"
                      src="https://img.icons8.com/pastel-glyph/64/single-bed--v5.png"
                      alt="bed"
                    />
                  </div>
                  <BedroomCondition data={data} />
                </div>
                <BathroomCondition data={data} />
              </div>
            </div>
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
            <div className="w-full">
              <h2 className="mt-[20px] font-bold">
                توضیحات {engToFaType(data.type)}
              </h2>
              <div className="w-full mt-[20px]">
                <ReadMoreLink
                  text={data.description}
                  type={engToFaType(data.type)}
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
            <div className="w-full mt-[20px] flex flex-col justify-start items-start gap-y-[20px]">
              <Facility
                facility={data.facility}
                type={engToFaType(data.type)}
              />
            </div>
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
            <div className="w-full flex justify-start items-center flex-col lg:items-start">
              <div className="w-full mt-[20px] font-bold">
                محاسبه قیمت {engToFaType(data.type)}
              </div>
              <div className="w-full flex justify-start items-start mt-[20px] lg:w-[36%]">
                <div className="w-[50px] mt-[8px]">
                  <img
                    className="w-[28px] h-[28px]"
                    src="https://img.icons8.com/ios/50/check-in-desk.png"
                    alt="extra-person"
                  />
                </div>
                <div className="w-full flex justify-start items-start flex-col">
                  <p className="font-medium text-[0.9rem]">نفر اضافه</p>
                  <p className="font-light text-[0.75rem]">
                    هزینه‌ای که برای نفرات بیش از استاندارد (سرویس خواب و ... )
                    به میلغ رزرو اضافه می‌شود.
                  </p>
                  <p className="font-light text-[0.75rem]">
                    قیمت برای هر نفر اضافه به ازای هر شب :
                    <strong className="font-bold text-[0.75rem]">
                      {/* {toFarsiNumber(data.price.extra)} هزار تومان */}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
            <div className="w-full mt-[20px] lg:w-[40%]">
              <div className="w-full font-bold">
                قوانین و مقررات {engToFaType(data.type)}
              </div>
              <div className="w-full h-[140px] flex justify-between items-center">
                <div
                  className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[8px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]
                                lg:border-main-gainsboro"
                >
                  <img
                    className="w-[25px] h-[25px]"
                    src="/images/clock.png"
                    alt="clock"
                  />
                  <p className="font-bold text-[1rem]">ساعت ورود</p>
                  <p className="font-light text-[0.8rem]">02:00 (بعد از ظهر)</p>
                </div>
                <div
                  className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[8px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]
                                lg:border-main-gainsboro"
                >
                  <img
                    className="w-[25px] h-[25px]"
                    src="/images/clock.png"
                    alt="clock"
                  />
                  <p className="font-bold text-[1rem]">ساعت خروج</p>
                  <p className="font-light text-[0.8rem]">12:00 (ظهر)</p>
                </div>
              </div>
            </div>
            <hr className="dashed-2" />
            <RulesComponent rules={data.rules} type={engToFaType(data.type)} />
            <div className="w-full h-[1px] bg-main-light-gray mt-[8px] lg:mt-0"></div>
            <CommentsComponent comments={data.reviews} />
            <div className="w-full h-[1px] bg-main-light-gray mt-[20px] lg:hidden"></div>
            <div className="w-full mt-[20px] flex flex-col px-[20px] lg:hidden">
              <div className="font-bold">
                جستجو {engToFaType(data.type)} مشابه
              </div>
              <div className="w-full h-[200px] flex items-start scroll-smooth scroll-p-[20px] gap-x-[20px] mt-[20px] whitespace-nowrap overflow-x-scroll lg:hidden">
                <a
                  href="#"
                  className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
                >
                  اجاره ویلا و سوئیت در کردان{" "}
                </a>
                <a
                  href="#"
                  className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
                >
                  اجاره ویلا و سوئیت باربیکیودار (منقل) در کردان{" "}
                </a>
                <a
                  href="#"
                  className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
                >
                  اجاره ویلا و سوئیت در استان البرز{" "}
                </a>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:h-full lg:inline lg:sticky lg:top-[40px] left-0 mt-[20px] mb-[40px]
                    lg:w-[26%] lg:p-[20px] lg:border-[1px] lg:border-main-light-gray lg:rounded-[8px]"
          >
            <ReservationBox data={data} />
          </div>
        </div>
        <div className="hidden lg:w-full lg:inline lg:h-[1px] lg:bg-main-light-gray lg:mt-[20px]"></div>
        <div className="hidden lg:w-full lg:mt-[20px] lg:flex lg:flex-col lg:px-[20px]">
          <div className="font-bold">جستجو {engToFaType(data.type)} مشابه</div>
          <div className="hidden lg:w-full lg:h-[100px] lg:flex lg:items-start lg:gap-x-[20px] lg:mt-[20px]">
            <a
              href="#"
              className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
            >
              اجاره ویلا و سوئیت در کردان
            </a>
            <a
              href="#"
              className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
            >
              اجاره ویلا و سوئیت باربیکیودار (منقل) در کردان
            </a>
            <a
              href="#"
              className="w-fit h-fit bg-main-light-grayish-silver font-medium text-[0.9rem] p-[20px] border-[1px] border-main-light-gray rounded-[10px]"
            >
              اجاره ویلا و سوئیت در استان البرز
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
