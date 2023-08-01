import React from 'react';
import {FaHouse} from "react-icons/fa6";
import {FaList} from "react-icons/fa6";
import {FaSuitcaseRolling} from "react-icons/fa6";
import {FaHeart} from "react-icons/fa6";
import {FaUser} from "react-icons/fa6";

const Menu = ({display}) => {

    return (
            <div className={`${display} flex items-center justify-center fixed bottom-0 w-full z-50 border-t border-t-main-gainsboro`}>
            <div className="flex flex-1 items-center justify-center flex-col py-3">
                <FaHouse className="text-lg"/>
                <span className="font-light text-[.6rem] mt-1">خانه</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <FaList className="text-lg"/>
                <span className="font-light text-[.6rem] mt-1">لیست شهرها</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <FaSuitcaseRolling className="text-lg"/>
                <span className="font-light text-[.6rem] mt-1">سفرهای من</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <FaHeart className="text-lg"/>
                <span className="font-light text-[.6rem] mt-1">علاقه‌مندی‌ها</span>
            </div>
            <div className="flex flex-1 items-center justify-center flex-col py-2">
                <FaUser className="text-lg"/>
                <span className="font-light text-[.6rem] mt-1">حساب کاربری</span>
            </div>
        </div>
    );
};

export default Menu;