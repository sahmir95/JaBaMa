import React from 'react';
import {FaSearch} from "react-icons/fa";


const HeaderLanding = () => {

    return (
        <div>
            <div className="px-5 pt-[15px]">
                <img className="h-[20px]" src="/images/color-logo.svg" alt="logo"/>
                <h5 className="text-[.6rem] font-light mt-2">اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران</h5>
            </div>
            <div className="p-5 sticky top-1">
                <div className="flex items-center justify-start border border-b-4 shadow-md border-b-main-orange border-main-gainsboro rounded-lg p-4">
                    <FaSearch className="text-main-slate-gray ml-4"/>
                    <span className="font-medium text-[14px] text-main-slate-gray">
                    جستجو شهر، استان یا اقامتگاه
                </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderLanding;