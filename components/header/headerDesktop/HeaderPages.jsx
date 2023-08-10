import React from 'react';
import {HiOutlineHeart} from "react-icons/hi";

const HeaderPages = ({display, border, loc, compFilter, compSearch, background, position}) => {


    return (
        <div className={`hidden lg:${display} h-fit ${background} ${position} ${border} ${loc} z-[60]`}>
            <div className='max-w-[1400px] flex flex-col mx-auto'>
                <div className={`flex items-center justify-between mx-auto w-full h-20 px-4 z-40`}>
                    <div className="flex items-center justify-start">
                        <a href="https://www.jabama.com/">
                            <img src="/images/color-logo.svg" alt="logo"/>
                        </a>
                    </div>
                    {compSearch}
                    <div className="flex items-center justify-end">
                        <div
                            className="flex items-center justify-center cursor-pointer ml-5 px-5 py-[13px] border border-main-light-gray rounded-lg">
                            <HiOutlineHeart className="text-main-black text-xl ml-2"/>
                            <span className="text-main-black font-medium text-sm">مورد علاقه‌ها</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer bg-[#fafafa] px-5 py-3 rounded-lg">
                            <img className="w-6 rounded-full" src="/images/userIcon.svg" alt="user"/>
                            <span className="font-medium text-sm mr-2">گروه سوم</span>
                        </div>
                    </div>
                </div>
                {compFilter}
            </div>
        </div>
    );
};

export default HeaderPages;