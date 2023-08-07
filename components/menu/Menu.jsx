import React from 'react';
import {IoHomeOutline} from "react-icons/io5";
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {PiSuitcaseRollingLight} from "react-icons/pi";
import {PiHeartStraight} from "react-icons/pi";
import {HiOutlineUser} from "react-icons/hi";

const Menu = () => {

    return (
            <div className="lg:hidden bg-main-white flex items-center justify-center fixed bottom-0 w-full z-40 border-t border-t-main-gainsboro">
            <div className="flex flex-1 items-center justify-center flex-col py-3">
                <IoHomeOutline className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">خانه</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <HiOutlineSquares2X2 className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">لیست شهرها</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <PiSuitcaseRollingLight className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">سفرهای من</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <PiHeartStraight className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">علاقه‌مندی‌ها</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <HiOutlineUser className="text-[22px] text-main-slate-gray"/>
                <span className="font-light text-[.6rem] mt-1">حساب کاربری</span>
            </div>
        </div>
    );
};

export default Menu;