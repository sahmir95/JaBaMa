import React from 'react';
import {HiOutlineHeart} from "react-icons/hi";

const HeaderDesktop = () => {

    return (
        <div className={`hidden lg:block`}>
            <div className="flex items-center justify-between absolute inset-0 mt-[60px] w-full h-20 max-w-[1400px] mx-auto px-4 z-40">
                <div className="flex items-center justify-start">
                    <a href="https://www.jabama.com/">
                        <img src="/images/white-logo.svg" alt="logo"/>
                    </a>
                </div>
                <div className="flex items-center justify-end">
                    <div className="flex items-center justify-center cursor-pointer ml-9">
                        <HiOutlineHeart className="text-main-white text-xl ml-2"/>
                        <span className="text-main-white font-medium text-sm">مورد علاقه‌ها</span>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer bg-main-white px-5 py-3 rounded-lg">
                        <img className="w-6 rounded-full" src="/images/userIcon.svg" alt="user"/>
                        <span className="font-medium text-sm mr-2">گروه سوم</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;