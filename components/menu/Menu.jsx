'use client'
import React, {useEffect} from 'react';
import {IoHomeOutline, IoHomeSharp} from "react-icons/io5";
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {PiSuitcaseRollingLight} from "react-icons/pi";
import {PiHeartStraight} from "react-icons/pi";
import {HiOutlineUser} from "react-icons/hi";
import {PiSuitcaseRollingFill} from "react-icons/pi";
import {PiHeartStraightFill} from "react-icons/pi";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {

    const pathname = usePathname();
    const isHome = pathname === "/";
    const isTrip = pathname === "/trips"
    const isFavorite = pathname === "/favorites"

    return (
        <div
            className="lg:hidden bg-main-white flex items-center justify-center fixed bottom-0 w-full z-40 border-t border-t-main-gainsboro">
            <Link href="/" className="flex flex-1 items-center justify-center flex-col py-2">
                {isHome ? <IoHomeSharp className="text-[22px] text-main-black"/> : <IoHomeOutline className="text-[22px] text-main-slate-gray"/>}
                <span className="font-light text-[.6rem] mt-1">خانه</span>
            </Link>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <HiOutlineSquares2X2 className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">لیست شهرها</span>
            </div>
            <Link href="/trips" className="flex flex-1 items-center justify-center flex-col py-2">
                {isTrip ? <PiSuitcaseRollingFill className="text-[22px] text-main-black"/> : <PiSuitcaseRollingLight className="text-[22px] text-main-slate-gray"/>}
                <span className="font-light text-[.6rem] mt-1">سفرهای من</span>
            </Link>
            <Link href="/favorites" className="flex flex-1 items-center justify-center flex-col py-2">
                {isFavorite ? <PiHeartStraightFill className="text-[22px] text-main-black"/> : <PiHeartStraight className="text-[22px] text-main-slate-gray"/>}
                <span className="font-light text-[.6rem] mt-1">علاقه‌مندی‌ها</span>
            </Link>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <HiOutlineUser className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">حساب کاربری</span>
            </div>
        </div>
    );
};

export default Menu;