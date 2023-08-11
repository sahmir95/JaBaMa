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
import {ImageDetailComponent} from "@/components/imageDetailComponent/ImageDetailComponent";
import {ReservationBox} from "@/components/ReservationBox/ReservationBox";

export default function Detail() {
    const detailData = useSelector((state) => state.detailSlice.detailData);
    const data = detailData;
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <div className="w-full inline relative lg:hidden">
                <SwiperDetailPage images={data.images} id={data.id}/>
                <img className="w-6 h-6 absolute top-0 z-10"
                     src="https://img.icons8.com/material-outlined/24/1A1A1A/right.png" alt="right"/>
            </div>
            <div className="w-full px-[20px] mt-[20px] flex justify-center items-center flex-col">
                <div className="w-full font-light flex justify-center items-center lg:flex lg:justify-between">
                    <div className="lg:flex lg:justify-start lg:items-start lg:flex-col">
                        <h1 className="text-center font-medium text-lg lg:text-[1rem] ">{data.title}</h1>
                        <div
                            className="font-light flex justify-center items-center flex-col mt-5 text-xs gap-1 lg:flex-row lg:gap-[4px]">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center gap-x-1 ">
                                    <img className="w-3 h-3"
                                         src="https://img.icons8.com/material-rounded/24/FAB005/star--v1.png"
                                         alt="star--v1"/>
                                    <div className="font-medium text-[0.7rem] lg:text-[0.9rem]">{data.rate}</div>
                                    <a className="underline lg:text-[0.85rem]">(17 نظر ثبت شده)</a>
                                </div>
                                <p className="text-lg lg:text-[0.85rem]">.</p>
                                <div className="flex justify-center items-center gap-1">
                                    <img className="w-3 h-3"
                                         src="https://img.icons8.com/fluency-systems-filled/48/FAB005/marker.png"
                                         alt="marker"/>
                                    <a className="underline lg:text-[0.85rem]">{data.province},{data.city}</a>
                                </div>
                                <p className="text-lg">.</p>
                            </div>
                            <div
                                className="px-[8px] py-[4px] rounded-[16px] bg-main-dark-red mt-[8px] font-medium text-[0.65rem] text-main-white lg:font-bold lg:text-[0.7rem] lg:px-[10px] lg:mt-0">%
                                تا {data.discount} درصد تخفیف
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:inline lg:flex lg:justify-around lg:items-center">
                        <ButtonFav/>
                    </div>
                </div>
                <div className="hidden lg:inline">
                    <ImageDetailComponent data={data}/>
                </div>
                <div className="w-full h-[1px] bg-main-light-gray mt-[20px] lg:hidden"></div>
                <div className="w-full flex justify-between items-center lg:relative">
                    <div className="w-full lg:w-[68%]">
                        <div className="w-full mt-[20px] flex justify-between items-center">
                            <div className="w-[74%]">
                                <div className="w-full font-bold">{data.type}</div>
                                <div className="w-full font-bold text-[0.9rem] text-main-slate-gray text-right">
                                    اجاره {data.type} در {data.city} به میزبانی {data.host.name}
                                </div>
                            </div>
                                <div className=" w-[30%] flex justify-end">
                                    {data.host.avatar ? (
                                        <img
                                            src={data.host.avatar}
                                            className="w-[50px] h-[50px] rounded-[50%] border-main-black border-[2px]"
                                            alt="avatar"
                                        />
                                    ) : (
                                        <div className="w-[50px] h-[50px] bg-main-slate-gray rounded-[50%] border-main-black border-[2px]">
                                            <img className="w-[50px] h-[50px] rounded-[50%] border-main-black border-[2px]" src="https://cdn.jabama.com/original/jabama-images/12345/52acb96f-472e-413e-9204-9a02bab95a94.svg" alt="avatar"/>
                                        </div>
                                    )}
                                </div>
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="mt-[20px] flex justify-start items-start">
                            <div className="w-[50px] mt-[8px] ">
                                {" "}
                                <img
                                    className="w-[36px] h-[25px]"
                                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/1A1A1A/external-flash-multimedia-tanah-basah-basic-outline-tanah-basah.png"
                                    alt="thunder"
                                />
                            </div>
                            <div className="w-full">
                                <p className="w-full font-bold text-[0.9rem]">
                                    رزرو آنی و قطعی جاباما
                                </p>
                                <p className="w-full font-light text-[0.75rem]">
                                    برای رزرو نهایی این آپارتمان نیازی به تأیید از سمت میزبان نخواهید
                                    داشت و رزرو شما قطعی خواهد بود.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="w-full flex justify-start items-start flex-col mt-[20px]">
                            <div>
                                <h2 className="font-bold text-[1rem]">مشخصات کلی {data.type}</h2>
                            </div>
                            <div className="mt-[20px] flex flex-col justify-around items-center gap-y-[20px]">
                                <div className="w-full flex justify-start items-center">
                                    <div className="w-[50px] ">
                                        {" "}
                                        <img
                                            className="w-[28px] h-[30px]"
                                            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-line-wedding-tanah-basah-basic-outline-tanah-basah-27.png"
                                            alt="thunder"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold text-[0.9rem]">درباره {data.type}</p>
                                        <p className="font-light text-[0.75rem]">{data.summary}</p>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <div className="w-[50px] ">
                                        {" "}
                                        <img
                                            className="w-[28px] h-[30px]"
                                            src="https://img.icons8.com/ios/50/user-group-man-man.png"
                                            alt="capacity"
                                        />{" "}
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold text-[0.9rem]">ظرفیت</p>
                                        <p className="font-light text-[0.75rem]">
                                            ظرفیت تا {data.capacity.base + data.capacity.extra} (
                                            {data.capacity.base} نفر پایه + تا {data.capacity.extra} نفر
                                            اضافه)
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center ">
                                    <div className="w-[50px] ">
                                        {" "}
                                        <img
                                            className="w-[28px] h-[30px]"
                                            src="https://img.icons8.com/pastel-glyph/64/single-bed--v5.png"
                                            alt="bed"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold text-[0.9rem]">سرویس‌های خواب</p>
                                        <p className=" font-light text-[0.75rem]">
                                            {data.bedroom.rooms} اتاق . {data.bedroom.double} تخت دو نفره
                                            . {data.bedroom.single} تخت یک نفره .{" "}
                                            {data.bedroom.traditional} رخت خواب سنتی
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex justify-start items-center">
                                    <div className="w-[50px] ">
                                        {" "}
                                        <img
                                            className="w-[28px] h-[30px]"
                                            src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-Toilet-Paper-halloween-those-icons-lineal-those-icons.png"
                                            alt="paper"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="font-bold text-[0.9rem]">سرویس‌های بهداشتی</p>
                                        <p className="font-light text-[0.75rem]">
                                            {data.bathroom.persianWC} سرویس ایرانی .{" "}
                                            {data.bathroom.foreignWC} سرویس فرنگی . {data.bathroom.shower}{" "}
                                            حمام
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="w-full">
                            <h2 className="mt-[20px] font-bold">توضیحات {data.type}</h2>
                            <div className="w-full mt-[20px]">
                                <ReadMoreLink text={data.description} type={data.type} />
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="w-full mt-[20px] flex flex-col justify-start items-start gap-y-[20px]">
                            <Facility facility={data.facility} type={data.type} />
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="w-full flex justify-start items-center flex-col">
                            <div className="w-full mt-[20px] font-bold ">
                                محاسبه قیمت {data.type}
                            </div>
                            <div className="w-full flex justify-start items-start mt-[20px]">
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
                                        هزینه‌ای که برای نفرات بیش از استاندارد (سرویس خواب و ... ) به
                                        میلغ رزرو اضافه می‌شود.
                                    </p>
                                    <p className="font-light text-[0.75rem]">
                                         قیمت برای هر نفر اضافه به ازای هر شب :
                                        <strong className="font-bold text-[0.75rem]">
                                            {data.price.extra} هزار تومان
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                        <div className="w-full mt-[20px]">
                            <div className="w-full font-bold">قوانین و مقررات {data.type}</div>
                            <div className="w-full h-[140px] flex justify-between items-center">
                                <div className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[10px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]">
                                    <img
                                        className="w-[25px] h-[25px]"
                                        src="/images/clock.png"
                                        alt="clock"
                                    />
                                    <p className="font-bold text-[1rem]">ساعت ورود</p>
                                    <p className="font-light text-[0.8rem]">02:00 (بعد از ظهر)</p>
                                </div>
                                <div className="w-[48%] h-[100px] flex justify-around items-start flex-col rounded-[10px] border-[1px] border-solid border-main-light-gray shadow-none p-[10px]">
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
                        <RulesComponent rules={data.rules} type={data.type} />
                        <div className="w-full h-[1px] bg-main-light-gray mt-[8px]"></div>
                        <CommentsComponent comments={data.reviews} />
                    <div className="w-full h-[1px] bg-main-light-gray mt-[20px]"></div>
                    <div className="w-full mt-[20px] flex flex-col px-[20px]">
                        <div className="font-bold">جستجو {data.type} مشابه</div>
                        <div className="w-full h-[200px] flex items-start scroll-smooth scroll-p-[20px] gap-x-[20px] mt-[20px] whitespace-nowrap overflow-x-scroll">
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
                    <div className="hidden  lg:inline lg:sticky lg:w-[26%] lg:p-[20px] lg:border-[1px] lg:border-main-light-gray lg:rounded-[10px]">
                        <ReservationBox data={data}/>
                    </div>


                </div>

            </div>
        </div>
    );
}
