import React from 'react';
import Link from "next/link";
import {RiSearchLine} from "react-icons/ri";
import HeaderPages from "@/components/header/headerDesktop/HeaderPages";
import styles from "./not-found.module.css"

const NotFound = () => {
    return (
        <>
            <HeaderPages/>
            <div className="lg:hidden max-w-[1024px]">
                <div className="flex items-center justify-center flex-col pt-[70px]">
                    <img className="mb-5" src="/images/404responsive.svg" alt="not-found"/>
                    <h2 className="font-light text-base">متاسفانه <span
                        className={`relative font-medium text-base ${styles.highlight}`}> صفحه مورد نظر شما وجود ندارد.</span></h2>
                    <p className="font-light text-sm mt-[10px] mb-[70px] w-[190px] text-center leading-7">اما می‌توانید هر
                        نوعی از اقامتگاه را در جاباما پیدا کنید</p>
                    <Link className="flex items-center justify-center border rounded-3xl px-[15px] py-[7px]" href="/">
                        <RiSearchLine className="text-xs"/>
                        <span className="w-[2px] h-3 bg-main-light-gray ml-[17px] mr-[12px]"></span>
                        <span className="font-medium text-sm text-main-navy-blue">جستجو اقامتگاه</span>
                    </Link>
                </div>
            </div>
            <div className="sm:hidden md:hidden lg:block py-32">
                <div className="flex items-center justify-center flex-col">
                    <img className="w-[297px] mb-[25px]" src="/images/404large.svg" alt="notfound"/>
                    <h2 className="font-light text-2xl">متاسفانه صفحه مورد نظر شما وجود ندارد.</h2>
                    <p className="font-light text-xl mt-[10px] mb-[44px]">اما می‌توانید هر نوعی از اقامتگاه‌ را <span className="font-bold text-main-light-orange bg-[url('/images/underline.svg')] bg-no-repeat bg-bottom pb-[11px]">در جاباما پیدا کنید🎉</span></p>
                    <Link className="border rounded-[10px] py-[16px] px-[22px] bg-[#1b262c]" href="/">
                        <span className="font-medium text-lg text-main-white">رفتن به صفحه‌ی اصلی جاباما</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;